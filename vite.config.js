import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, IonicResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(async () => ({
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
    },
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver(), IonicResolver()],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                (await import('postcss-px-to-viewport')).default({
                    viewportWidth: 375,
                    unitPrecision: 5
                })
            ]
        }
    }
}))