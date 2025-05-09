import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// replace 'your-repo-name' with your actual GitHub repository name
export default defineConfig({
  base: '/terratech/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
