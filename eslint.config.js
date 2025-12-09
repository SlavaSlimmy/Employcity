import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended, // eslint:recommended

  prettier, // отключает конфликтующие правила

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-extra-semi': 'warn',
      'no-unreachable': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-multi-spaces': 'warn',
      'spaced-comment': ['warn', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'no-shadow': 'warn',
      'no-console': 'off', // при необходимости
    },
  },
];
