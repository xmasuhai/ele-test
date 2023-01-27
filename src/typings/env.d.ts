declare module "*.vue" {
  import type {DefineComponent} from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}
/* eslint-disable */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'