import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
// import svgrPlugin from "vite-plugin-svgr";
// const { resolve: resolvePath } = require("path");
// const swrId = resolvePath(__dirname, "Services/swr");
// const route = resolvePath(__dirname, "Services/routes");
// const mainId = resolvePath(__dirname, "main");
// const sidebar = resolvePath(__dirname, "Services/sidebarMenu");
// const build = resolvePath(__dirname, "dist");

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [reactRefresh(), tsconfigPaths(), eslint()],
  // build: {
  //   // to make tests faster
  //   minify: false,
  // },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    rollupOptions: {
      // input: {
      //   main: resolvePath(__dirname, "index.html"),
      // },
      // external: ["../src/Services/swr.tsx", "../src/main.tsx"],
      // external: [swrId, mainId, route, sidebar, build],
    },
  },
};
