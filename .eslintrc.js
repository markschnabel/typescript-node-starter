module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 240,
        tabWidth: 2
      }
    ],
    '@typescript-eslint/no-use-before-define': [2, { functions: false, classes: true }],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {
          typeof: false,
          delete: false
        }
      }
    ],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false
      }
    ],
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-multi-spaces': ['error'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'no-undefined': ['error'],
    'no-unused-expressions': ['error'],
    'dot-notation': ['error'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never']
  }
};
