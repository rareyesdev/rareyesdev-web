module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  settings: {
    react: {
      pragma: 'h',
      version: 'detect',
    },
  },
  ignorePatterns: ['build/*', '**/*.css.d.ts'],
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',

    // this is buggy https://github.com/typescript-eslint/typescript-eslint/issues/1868
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // this seems to be caching. changes to CSS are not picked up even when TS sees the new value
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
