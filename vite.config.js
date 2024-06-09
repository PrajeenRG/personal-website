import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [ViteImageOptimizer(), enhancedImages(), sveltekit()],
  build: {
    assetsInlineLimit: 0,
  },
})
