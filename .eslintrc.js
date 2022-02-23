module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  overrides: [
    {
      files: ['src/*.{js,jsx}', 'src/**/*.{js,jsx,}'],
    },
  ],
  rules: {
    'no-use-before-define': 'off',
    complexity: ['error', { max: 7 }],
    camelcase: ['warn', { ignoreDestructuring: true, ignoreImports: true, properties: 'never' }],
    'max-params': ['error', 7],
    'no-cond-assign': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
