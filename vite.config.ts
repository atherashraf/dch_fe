import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'), // << THIS is the important line
        },
    },
    optimizeDeps: {
        include: ['@fontsource/roboto/300.css', '@fontsource/roboto/400.css', '@fontsource/roboto/500.css', '@fontsource/roboto/700.css']
    },
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:8778', // your FastAPI backend
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
