import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:7071", // API サーバーの URL
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
