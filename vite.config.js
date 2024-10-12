import { viteStaticCopy } from "vite-plugin-static-copy";

/** @type {import('vite').UserConfig} */
export default {
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
        {
          src: "about.html",
          dest: ".",
        },
        {
          src: "contact.html",
          dest: ".",
        },
        {
          src: "service.html",
          dest: ".",
        },
        {
          src: "portfolio.html",
          dest: ".",
        },
      ],
    }),
  ],
};
