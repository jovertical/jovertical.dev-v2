/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', {}],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: false,
        ignoreMemberSort: false,
      },
    ],
  },
}
