import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          /*
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          */

        },
      ],
      // UI
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),

    // By default, this plugin will import components in the src/components path. (or customize it using the dirs option)
    Components({
      dts: true, // enabled by default if `typescript` is installed
      resolvers: [ElementPlusResolver()],
      deep: true, // search for subdirectories
      directoryAsNamespace: true, // Allow subdirectories as namespace prefix for components

      /*
      Collapse same prefixes (camel-sensitive) of folders and components
      to prevent duplication inside namespaced component name.
      works when `directoryAsNamespace: true`
      */
      collapseSamePrefixes: true,
      globalNamespaces: [], // Subdirectory paths for ignoring namespace prefixes.
      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
