// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site:'https://abertoandrade10.github.io/AlbertoAndrade10.github.io/',
  base:'/AlbertoAndrade10.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
});
