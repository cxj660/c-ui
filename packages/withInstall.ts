export const withInstall = (component: any) => {
  component.install = function (Vue: any) {
    Vue.component(component.name, component)
  }
  return component
}
