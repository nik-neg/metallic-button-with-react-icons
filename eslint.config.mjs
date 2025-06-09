import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    ...pluginReact.configs.flat.recommended,
    rules: {
      // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
    }
  }
];
