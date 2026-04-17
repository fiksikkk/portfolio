import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "app": path.resolve(__dirname, "./src/app"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "widgets": path.resolve(__dirname, "./src/widgets"),
      "features": path.resolve(__dirname, "./src/features"),
      "entities": path.resolve(__dirname, "./src/entities"),
      "shared": path.resolve(__dirname, "./src/shared"),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
