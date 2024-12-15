import type { StorybookConfig } from "@storybook/vue3-vite"
import { mergeConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true
  },
  docs: {
    autodocs: true
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src")
        }
      },
      optimizeDeps: {
        include: ["vue", "vuetify"]
      },
      base: "./",
      build: {
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name][extname]',
            chunkFileNames: 'assets/[name].js',
            entryFileNames: 'assets/[name].js',
          }
        }
      }
    })
  }
}

export default config