import typescriptParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

import { eslintBoundariesConfig } from "./config/eslint.boundaries.config.js";
import { eslintImportConfig } from "./config/eslint.import.config.js";
import { eslintUseDispatchConfig } from "./config/eslint.useDispatch.config.js";
import { eslintUseSelectorConfig } from "./config/eslint.useSelector.config.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config([
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.config.{js,ts}",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
    },
  },
  eslintUseDispatchConfig,
  eslintUseSelectorConfig,
  // eslintBoundariesConfig,
  eslintImportConfig,
]);
