import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import wyw from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'remote-app',
    filename: 'remoteEntry.js',
    // Modules to expose

    exposes: {
      './ReactApplication': './src/ReactApplication.tsx',
    },
    shared: ['react'],

  }),wyw({
    include: ['**/*.{ts,tsx}'],
    babelOptions: {
      presets: ['@babel/preset-typescript', '@babel/preset-react']
    }
  })],
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
