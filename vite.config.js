import { defineConfig, loadEnv } from 'vite';
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

const envResolver = {
    "build": () => {
        return ({ ...viteBaseConfig, ...viteProdConfig });
    },
    "serve": () => {
        return ({ ...viteBaseConfig, ...viteDevConfig });
    }
};

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    console.log(command, mode)
    const env = loadEnv(mode, process.cwd(), '')
    console.log(env)
    // command: 'build' | 'serve'
    return envResolver[command]();
})
