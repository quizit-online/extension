import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
// @ts-ignore
import manifest from "./manifest.json" assert { type: "json" };
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest }),
    viteStaticCopy({
      targets: [
        {
          src: "./src/_locales",
          dest: "",
        },
      ],
    }),
  ],
});
