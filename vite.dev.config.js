import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
        exclude: [] // 此数组中指定的依赖不进行依赖预构建
    },
    envPrefix: "ENV" // 配置 Vite 注入客户端环境变量 import.meta.env 的前缀
})