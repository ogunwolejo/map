import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    origin: "http://localhost:3000",
    port: 3000,
  },
  base: "http://localhost:3000",
  plugins: [react()],
});
