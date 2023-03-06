import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/loadTest.ts",
  output: {
    file: "dist/script.js",
    format: "es",
  },
  plugins: [esbuild()],
  external: ["k6", "k6/options", "k6/http"],
};
