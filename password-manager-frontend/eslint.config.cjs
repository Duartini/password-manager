/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  languageOptions: {
    globals: {
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
  plugins: {
    react: require('eslint-plugin-react'),
    // Agrega más plugins si es necesario
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Agrega más configuraciones extendidas si es necesario
  ],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Para Next.js o si usas un entorno que no requiere React en el alcance
    // Agrega más reglas según las necesidades de tu proyecto
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
};

module.exports = eslintConfig;
