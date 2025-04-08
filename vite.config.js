import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import history from 'connect-history-api-fallback'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middlewareMode: false,
    setupMiddlewares(middlewares) {
      middlewares.unshift(
        history({
          disableDotRule: true,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        })
      )
      return middlewares
    },
  },
})
