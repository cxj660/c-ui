import fs from 'fs'
import { defineLoader } from 'vitepress'

type Data = Record<string, boolean>[]
export declare const data: Data

export default defineLoader({
  watch: ['./data/*'],
  async load(files: string[]): Promise<Data> {
    const foo = fs.readFileSync(
      files.find((f) => f.endsWith('foo.json'))!,
      'utf-8'
    )
    const bar = fs.readFileSync(
      files.find((f) => f.endsWith('bar.json'))!,
      'utf-8'
    )
    return [JSON.parse(foo), JSON.parse(bar)]
  }
})
