module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    semi: ['error', 'never'],
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'max-len': ['error', {
      code: 100, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],
    radix: 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
  },
}
