import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // Bind to all interfaces (needed for Netlify or external access)
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});