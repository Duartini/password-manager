/** @type {import('eslint').Linter.FlatConfig} */
const eslintConfig = [
  // Configuración de los plugins
  {
    plugins: {
      react: require('eslint-plugin-react'),
    },
  },
  // Configuración de las opciones del lenguaje
  {
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
  },
  // Configuración de las reglas
  {
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // Para Next.js o si usas un entorno que no requiere React en el alcance
    },
  },
  // Configuración de plugins de configuración adicional si es necesario
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

module.exports = eslintConfig;
