// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// import { eslintBoundariesConfig } from './eslint.boundaries.js';
// import { eslintImportConfig } from './eslint.import.js'; 

export default tseslint.config(
  [
    globalIgnores(['dist', 'node_modules', 'fontLocal', 'oldapp']),
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      ignores: ['./.next/**'],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-function-type": "off",
      },
    },
    // eslintBoundariesConfig,
    // eslintImportConfig,
  ],
);
