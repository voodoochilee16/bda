module.export = {
  useTabs: true,
  singleQuote: true,
  trailingComma: "none",
  tailwindConfig: "./tailwind.config.cjs",
  printWidth: 100,
  plugins: [require("prettier-plugin-tailwindcss")],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
