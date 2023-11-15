module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "max-len": ["warn", { "code": 80 }],

    "indent": ["error", 4],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],

    "@typescript-eslint/no-u:nused-vars": "off",

    "eol-last": ["error", "always"],
  },
};
