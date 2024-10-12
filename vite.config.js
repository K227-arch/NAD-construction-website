import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "./about.html"),
        service: resolve(__dirname, "./service.html"),
        contact: resolve(__dirname, "./contact.html"),
        portfolio: resolve(__dirname, "./portfolio.html"),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "lib/*",
          dest: "lib",
        },
        {
          src: "js/*",
          dest: "js",
        },
        {
          src: "img/*",
          dest: "img",
        },
        {
          src: "mail/*",
          dest: "mail",
        },
        {
          src: "img/*",
          dest: "img",
        },
      ],
    }),
  ],
};
