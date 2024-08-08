/** @type {import('eslint').Linter.Config} */
module.exports = {
  languageOptions: {
    globals: {
      // Define global variables for your files here
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'react/prop-types': 'off',
  },
};
