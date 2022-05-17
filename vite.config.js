import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@comp": path.resolve(__dirname, "./src/components"),
            "@data": path.resolve(__dirname, "./src/datas"),
            "@page": path.resolve(__dirname, "./src/pages"),
            "@texture": path.resolve(__dirname, "./src/assets/textures"),
        },
    },
});
