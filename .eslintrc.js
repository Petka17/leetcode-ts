module.exports = {
  env: {
    node: true,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint", "simple-import-sort"],
    },
    {
      files: ["*.js"],
      parserOptions: {
        ecmaVersion: 2019,
      },
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
      plugins: ["simple-import-sort"],
    },
  ],
}
