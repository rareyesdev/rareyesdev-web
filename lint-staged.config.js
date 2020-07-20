module.exports = {
  '*.{css,md,scss}': 'prettier --write',
  '*.{js,ts,tsx}': 'node_modules/.bin/eslint --fix',
};
