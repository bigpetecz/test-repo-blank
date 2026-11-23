export default [
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    rules: {
      'eqeqeq': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'semi': ['error', 'always'],
    },
  },
];
