/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Personaliza tus reglas aquí
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'react/prop-types': 'off',
    // Agrega más reglas según tus necesidades
  },
};
