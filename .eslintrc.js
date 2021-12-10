const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:array-func/recommended'
  ],

  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'unicorn',
    'jest'
  ],

  env: {
    node: true,
    browser: true,
    es2020: true
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },

  rules: {
    // TS
    '@typescript-eslint/explicit-module-boundary-types': OFF,

    // Best Practices
    'no-await-in-loop': OFF,
    'require-atomic-updates': OFF,
    'block-scoped-var': OFF,
    'class-methods-use-this': OFF,
    complexity: OFF,
    'default-case': OFF,
    'guard-for-in': OFF,
    'no-caller': ERROR,
    'no-div-regex': OFF,
    'no-else-return': OFF,
    'no-empty-function': OFF,
    'no-empty-pattern': ERROR,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': [ERROR, { exceptions: ['Map', 'Set'] }],
    'no-implicit-coercion': OFF,
    'no-implicit-globals': OFF,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-iterator': ERROR,
    'no-labels': [ERROR, { allowLoop: true, allowSwitch: true }],
    'no-lone-blocks': ERROR,
    'no-loop-func': OFF,
    'no-magic-numbers': OFF,
    'no-multi-str': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-new': ERROR,
    'no-octal': ERROR,
    'no-octal-escape': ERROR,
    'no-proto': ERROR,
    'no-redeclare': [ERROR, { builtinGlobals: true }],
    'no-restricted-properties': OFF,
    'no-return-await': OFF,
    'no-script-url': ERROR,
    'no-self-assign': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': OFF,
    'no-unused-labels': ERROR,
    'no-useless-call': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-return': ERROR,
    'no-with': ERROR,
    'require-await': ERROR,
    'vars-on-top': OFF,
    'wrap-iife': [ERROR, 'inside'],
    yoda: ERROR,
    'import/extensions': [ERROR, 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-confusing-arrow': OFF,

    // Variables
    'init-declarations': OFF,
    'no-catch-shadow': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': OFF,
    'no-shadow-restricted-names': ERROR,
    'no-undef-init': OFF,
    'no-undef': ERROR,
    'no-undefined': OFF,
    'no-use-before-define': OFF,

    // Node.js
    'callback-return': OFF,
    'global-require': OFF,
    'handle-callback-err': ERROR,
    'no-mixed-requires': OFF,
    'no-new-require': ERROR,
    'no-path-concat': ERROR,
    'no-process-env': OFF,
    'no-process-exit': OFF,
    'no-restricted-modules': OFF,
    'no-sync': OFF,

    // Style
    'array-bracket-spacing': ERROR,
    'block-spacing': ERROR,
    'capitalized-comments': OFF,
    'comma-spacing': ERROR,
    'comma-style': ERROR,
    'computed-property-spacing': ERROR,
    'consistent-this': OFF,
    'func-call-spacing': ERROR,
    'func-name-matching': OFF,
    'func-names': OFF,
    'func-style': OFF,
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'key-spacing': ERROR,
    'line-comment-position': OFF,
    'lines-around-comment': OFF,
    'lines-around-directive': OFF,
    'max-depth': OFF,
    'max-lines': OFF,
    'max-nested-callbacks': OFF,
    'max-statements': OFF,
    'max-statements-per-line': OFF,
    'multiline-ternary': OFF,
    'new-cap': OFF,
    'new-parens': ERROR,
    'newline-after-var': OFF,
    'newline-before-return': OFF,
    'newline-per-chained-call': OFF,
    'no-array-constructor': ERROR,
    'no-continue': OFF,
    'no-inline-comments': OFF,
    'no-lonely-if': OFF,
    'no-mixed-operators': OFF,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-negated-condition': OFF,
    'no-new-object': ERROR,
    'no-plusplus': OFF,
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': ERROR,
    'no-underscore-dangle': OFF,
    'no-unneeded-ternary': ERROR,
    'no-whitespace-before-property': ERROR,
    'object-curly-newline': OFF,
    'object-curly-spacing': [ERROR, 'always', { objectsInObjects: true, arraysInObjects: true }],
    'object-property-newline': OFF,
    'one-var-declaration-per-line': OFF,
    'one-var': [ERROR, { initialized: 'never' }],
    'operator-assignment': ERROR,
    'operator-linebreak': OFF,
    'padded-blocks': OFF,
    'require-jsdoc': OFF,
    'semi-spacing': ERROR,
    semi: ERROR,
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-infix-ops': [ERROR, { int32Hint: true }],
    'unicode-bom': [ERROR, 'never'],
    'wrap-regex': OFF,

    // Unicorn
    'unicorn/prefer-node-protocol': OFF,
    'unicorn/prefer-node-append': OFF,
    'unicorn/consistent-function-scoping': OFF,
    'unicorn/catch-error-name': OFF,
    'unicorn/prefer-query-selector': OFF,
    'unicorn/explicit-length-check': OFF,
    'unicorn/prefer-add-event-listener': OFF,
    'unicorn/import-index': ERROR,
    'unicorn/no-console-spaces': ERROR,
    'unicorn/no-array-instanceof': ERROR,
    'unicorn/prefer-type-error': ERROR,
    'unicorn/prefer-exponentiation-operator': ERROR,
    'unicorn/no-static-only-class': OFF,
    'unicorn/prefer-spread': OFF,
    'unicorn/throw-new-error': ERROR,
    'unicorn/new-for-builtins': ERROR,
    'unicorn/no-abusive-eslint-disable': ERROR,
    'unicorn/regex-shorthand': ERROR,
    'unicorn/prevent-abbreviations': OFF,
    'unicorn/prefer-text-content': OFF,
    'unicorn/prefer-node-remove': OFF,
    'unicorn/no-null': OFF,
    'unicorn/no-array-reduce': OFF,
    'unicorn/no-array-for-each': OFF,
    'unicorn/no-fn-reference-in-iterator': OFF,
    'unicorn/no-array-callback-reference': OFF,
    'unicorn/numeric-separators-style': OFF,

    // ECMAScript 6
    'arrow-body-style': OFF,
    'arrow-spacing': ERROR,
    'arrow-parens': OFF,
    'constructor-super': ERROR,
    'generator-star-spacing': [ERROR, { before: true, after: false }],
    'no-class-assign': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-new-symbol': ERROR,
    'no-restricted-imports': OFF,
    'no-this-before-super': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-rename': ERROR,
    'prefer-arrow-callback': [ERROR, { allowNamedFunctions: true }],
    'prefer-numeric-literals': OFF,
    'prefer-spread': ERROR,
    'prefer-template': OFF,
    'require-yield': OFF,
    'rest-spread-spacing': ERROR,
    'sort-imports': OFF,
    'symbol-description': ERROR,
    'template-curly-spacing': [ERROR, 'never'],
    'yield-star-spacing': ERROR,
    'accessor-pairs': OFF,
    'array-callback-return': OFF,
    'brace-style': [ERROR, '1tbs'],
    camelcase: OFF,
    'comma-dangle': [ERROR, 'never'],
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    eqeqeq: [ERROR, 'allow-null'],
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'max-len': [ERROR, { code: 120, ignorePattern: "(?:^import |export|Path|Rect|Svg|LinearGradient)|(?:it|describe)\\('[\\w\\s]+'" }],
    'max-params': [ERROR, 6],
    'no-bitwise': OFF,
    'no-duplicate-imports': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': [OFF, { exceptions: { ImportDeclaration: true } }],
    'no-nested-ternary': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-return-assign': OFF,
    'no-shadow': OFF,
    'no-unused-expressions': [ERROR, { allowShortCircuit: true }],
    'no-unused-vars': [OFF, { args: 'none' }],
    'no-useless-escape': ERROR,
    'prefer-const': ERROR,
    'prefer-rest-params': ERROR,
    quotes: [ERROR, 'single', 'avoid-escape'],
    'keyword-spacing': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, { anonymous: 'always', named: 'never' }],
    strict: [ERROR, 'global'],
    radix: OFF,
    'no-console': ERROR,
    'object-shorthand': [ERROR, 'always'],
    'linebreak-style': OFF,
    'no-cond-assign': OFF,
    'no-constant-condition': ERROR,
    'no-alert': OFF,
    'no-void': ERROR,
    'space-unary-ops': ERROR,
    'spaced-comment': ERROR,
    'no-var': ERROR,
    'space-in-parens': ERROR,
    'no-useless-constructor': ERROR,
    curly: OFF,
    'no-multiple-empty-lines': ERROR,
    'import/no-duplicates': ERROR,
    'import/no-unresolved': OFF,
    'import/newline-after-import': ERROR,
    'import/named': OFF,

    // React Recommended
    'react/no-unused-prop-types': OFF,
    'react/no-unused-state': ERROR,
    'react/no-unsafe': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-typos': WARNING,
    'react/prefer-es6-class': [ERROR, 'always'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/prefer-stateless-function': [ERROR, { ignorePureComponents: true }],
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': OFF,
    'react/jsx-sort-props': OFF,
    'react/prop-types': OFF,
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-handler-names': OFF,
    'react/jsx-tag-spacing': [ERROR, { beforeSelfClosing: 'always' }],
    'react/jsx-boolean-value': [ERROR, 'never'],
    'react/jsx-curly-spacing': ERROR,
    'react/no-array-index-key': OFF,
    'jsx-a11y/no-autofocus': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'react/display-name': OFF,
    'react/jsx-one-expression-per-line': OFF
  }
};
