module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 10],
    'header-case-start-capital': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            'Commit message must start with a capital letter',
          ]
        },
      },
    },
  ],
}
