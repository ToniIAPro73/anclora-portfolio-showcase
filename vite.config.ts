import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static demo — no env vars, no external services, relative base for portable deploys.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
