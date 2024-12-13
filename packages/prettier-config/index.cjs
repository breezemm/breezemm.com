module.exports = {
  arrowParens: 'always',
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  importOrder: [
    '^server-only|client-only$',
    '^react$',
    '^next(/.*)?$',
    '<THIRD_PARTY_MODULES>',
    '^@breezemm/(.*)$',
    '^~/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  overrides: [],
};
