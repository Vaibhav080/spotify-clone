import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ✅ No tailwindcss plugin needed here — handled via PostCSS
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    port:3000,
  }
});
