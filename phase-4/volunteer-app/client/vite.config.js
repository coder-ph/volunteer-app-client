import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/users": {
        target: "http://127.0.0.1:5555",
        changeOrigin: true,
        secure: false,
      },
      "/organizations": {
        target: "http://127.0.0.1:5555",
        changeOrigin: true,
        secure: false,
      },
      "/events": {
        target: "http://127.0.0.1:5555",
        changeOrigin: true,
        secure: false,
      },
      "/events/id": {
        target: "http://127.0.0.1:5555",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
