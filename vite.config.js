// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // IMPORTANT: set this to "/<your-repo-name>/" for GitHub Pages
  base: "/Portfolio-Website/",
  plugins: [react()]
});
