import { defineConfig } from 'vite'
import { resolve } from 'path'
import { peerDependencies } from './package.json'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      'jsxRuntime': 'classic'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: resolve(__dirname, 'lib'),
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibraryReact',
      fileName: 'index'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    target: 'esnext',
    sourcemap: true
  }
})
