import {
  componentPlugin,
  type ComponentPluginOptions
} from '@mdit-vue/plugin-component'
import {
  frontmatterPlugin,
  type FrontmatterPluginOptions
} from '@mdit-vue/plugin-frontmatter'
import {
  headersPlugin,
  type HeadersPluginOptions
} from '@mdit-vue/plugin-headers'
import { sfcPlugin, type SfcPluginOptions } from '@mdit-vue/plugin-sfc'
import { titlePlugin } from '@mdit-vue/plugin-title'
import { tocPlugin, type TocPluginOptions } from '@mdit-vue/plugin-toc'
import { slugify } from '@mdit-vue/shared'
import MarkdownIt from 'markdown-it'
import anchorPlugin from 'markdown-it-anchor'
import attrsPlugin from 'markdown-it-attrs'
import emojiPlugin from 'markdown-it-emoji'
import type { ILanguageRegistration, IThemeRegistration } from 'shiki'
import type { Logger } from 'vite'
import { containerPlugin, type ContainerOptions } from './plugins/containers'
import { highlight } from './plugins/highlight'
import { highlightLinePlugin } from './plugins/highlightLines'
import { imagePlugin } from './plugins/image'
import { lineNumberPlugin } from './plugins/lineNumbers'
import { linkPlugin } from './plugins/link'
import { preWrapperPlugin } from './plugins/preWrapper'
import { snippetPlugin } from './plugins/snippet'

export type { Header } from '../shared'

export type ThemeOptions =
  | IThemeRegistration
  | { light: IThemeRegistration; dark: IThemeRegistration }

export interface MarkdownOptions extends MarkdownIt.Options {
  lineNumbers?: boolean
  preConfig?: (md: MarkdownIt) => void
  config?: (md: MarkdownIt) => void
  anchor?: anchorPlugin.AnchorOptions
  attrs?: {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: Array<string | RegExp>
    disable?: boolean
  }
  defaultHighlightLang?: string
  frontmatter?: FrontmatterPluginOptions
  headers?: HeadersPluginOptions | boolean
  sfc?: SfcPluginOptions
  theme?: ThemeOptions
  languages?: ILanguageRegistration[]
  toc?: TocPluginOptions
  externalLinks?: Record<string, string>
  cache?: boolean
  component?: ComponentPluginOptions
  math?: boolean | any
  container?: ContainerOptions
}

export type MarkdownRenderer = MarkdownIt

export const createMarkdownRenderer = async (
  srcDir: string,
  options: MarkdownOptions = {},
  base = '/',
  logger: Pick<Logger, 'warn'> = console
): Promise<MarkdownRenderer> => {
  const theme = options.theme ?? { light: 'github-light', dark: 'github-dark' }
  const hasSingleTheme = typeof theme === 'string' || 'name' in theme

  const md = MarkdownIt({
    html: true,
    linkify: true,
    highlight:
      options.highlight ||
      (await highlight(
        theme,
        options.languages,
        options.defaultHighlightLang,
        logger
      )),
    ...options
  })

  md.linkify.set({ fuzzyLink: false })

  if (options.preConfig) {
    options.preConfig(md)
  }

  // custom plugins
  md.use(componentPlugin, { ...options.component })
    .use(highlightLinePlugin)
    .use(preWrapperPlugin, { hasSingleTheme })
    .use(snippetPlugin, srcDir)
    .use(containerPlugin, { hasSingleTheme }, options.container)
    .use(imagePlugin)
    .use(
      linkPlugin,
      { target: '_blank', rel: 'noreferrer', ...options.externalLinks },
      base
    )
    .use(lineNumberPlugin, options.lineNumbers)

  // 3rd party plugins
  if (!options.attrs?.disable) {
    md.use(attrsPlugin, options.attrs)
  }
  md.use(emojiPlugin)

  // mdit-vue plugins
  md.use(anchorPlugin, {
    slugify,
    permalink: anchorPlugin.permalink.linkInsideHeader({
      symbol: '&ZeroWidthSpace;',
      renderAttrs: (slug, state) => {
        // Find `heading_open` with the id identical to slug
        const idx = state.tokens.findIndex((token) => {
          const attrs = token.attrs
          const id = attrs?.find((attr) => attr[0] === 'id')
          return id && slug === id[1]
        })
        // Get the actual heading content
        const title = state.tokens[idx + 1].content
        return {
          'aria-label': `Permalink to "${title}"`
        }
      }
    }),
    ...options.anchor
  } as anchorPlugin.AnchorOptions).use(frontmatterPlugin, {
    ...options.frontmatter
  } as FrontmatterPluginOptions)

  if (options.headers) {
    md.use(headersPlugin, {
      level: [2, 3, 4, 5, 6],
      slugify,
      ...(typeof options.headers === 'boolean' ? undefined : options.headers)
    } as HeadersPluginOptions)
  }

  md.use(sfcPlugin, {
    ...options.sfc
  } as SfcPluginOptions)
    .use(titlePlugin)
    .use(tocPlugin, {
      ...options.toc
    } as TocPluginOptions)

  if (options.math) {
    try {
      const mathPlugin = await import('markdown-it-mathjax3')
      md.use(mathPlugin.default ?? mathPlugin, {
        ...(typeof options.math === 'boolean' ? {} : options.math)
      })
    } catch (error) {
      throw new Error(
        'You need to install `markdown-it-mathjax3` to use math support.'
      )
    }
  }

  // apply user config
  if (options.config) {
    options.config(md)
  }

  return md
}
