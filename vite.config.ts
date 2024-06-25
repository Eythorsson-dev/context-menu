import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
    plugins: [
        dts({
            include: ['src'],
            exclude: "**/*.test.ts"
        })
    ],
    build: {
        manifest: true,
        minify: true,
        sourcemap: true,
        reportCompressedSize: true,
        lib: {
            entry: "./src/index.ts",
            formats: ['es'],
            name: "common-utils",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies), // don't bundle dependencies
                /^node:.*/, // don't bundle built-in Node.js modules (use protocol imports!)
            ],
        },
    }
})