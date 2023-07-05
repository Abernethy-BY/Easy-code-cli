/*
 * @Author: Bianyu by15242952083@outlook.com
 * @Date: 2023-07-05 16:32:40
 * @LastEditors: Bianyu by15242952083@outlook.com
 * @LastEditTime: 2023-07-05 17:21:43
 * @FilePath: \Easy-code-cli\vite.config.ts
 * @Description:
 * Copyright (c) 2023 by Bianyu email: by15242952083@outlook.com, All Rights Reserved.
 */
// vite.config.js
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// yarn add --dev @esbuild-plugins/node-modules-polyfill
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
    disabled: false,
  },

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'Easy-code-cli',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        (rollupNodePolyFill as any)(),
      ],
    },
    commonjsOptions: {
      include: [],
    },
  },
})
