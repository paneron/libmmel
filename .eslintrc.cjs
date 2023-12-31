const path = require('path');

var rules = {
  'quotes' : [
    'warn',
    'single',
    { avoidEscape: true },
  ],
  "require-jsdoc" : ["off"],
  "valid-jsdoc"   : ["off"],
  "indent"        : [
    "error",
    2,
    {
      SwitchCase         : 1,
      VariableDeclarator : {
        "var"   : 2,
        "let"   : 2,
        "const" : 3,
      },
      ignoredNodes : ["ConditionalExpression"],
    },
  ],
  "key-spacing" : [
    "error",
    {
      singleLine : {
        beforeColon : true,
        afterColon  : true,
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true,
        align       : "colon",
      },
    },
  ],
  "keyword-spacing" : [
    "error",
    {
      before : true,
      after  : true,
    },
  ],
  "spaced-comment" : [
    "error",
    "always",
    {
      exceptions : ["-", "+", "=", "*"],
      markers    : ["=", "*/", "/*", "X", "//"],
    },
  ],
  "no-multi-spaces" : [
    1,
    {
      exceptions : {
        VariableDeclarator : true,
      },
    },
  ],
  "no-cond-assign" : [2, "except-parens"],
  // "no-redeclare"   : [
  //   "error",
  //   {
  //     builtinGlobals : true,
  //   },
  // ],
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": ["error"],
  "dot-notation" : [
    2,
    {
      allowKeywords : true,
    },
  ],
  "eqeqeq"      : [2, "smart"],
  "no-plusplus" : [
    "warn",
    {
      allowForLoopAfterthoughts : true,
    },
  ],
  "one-var" : [
    "off", // Enable once tests are set up
    "consecutive",
  ],
  "object-curly-spacing" : [
    "error",
    "always",
    {
      objectsInObjects : false,
      arraysInObjects  : false,
    },
  ],
  "quote-props" : [
    "error",
    "consistent-as-needed",
    {
      keywords : true,
    },
  ],
  "camelcase" : ["warn"],
  "max-len"   : ["warn"],
  "new-cap"   : ["warn"],
  'no-empty-function' : 'off',
  'no-unused-vars' : 'off',
  "key-spacing" : [
    "error",
    {
      singleLine : {
        beforeColon : true,
        afterColon  : true,
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true,
        align       : "colon",
      },
    },
  ],
  'react/prop-types' : 'off',
  'react/no-unknown-property' : ['error', { ignore : ['css'] }],
  '@typescript-eslint/consistent-type-imports' : [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
    }
  ],
  '@typescript-eslint/no-empty-function' : 'off',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing' : 'warn',
  '@typescript-eslint/no-unused-vars' : 'warn',
};

var typescriptConfig = {
  "extends" : [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/strict',
    // "plugin:prettier/recommended",
  ],
  "parser"        : "@typescript-eslint/parser",
  "parserOptions" : {
    project : path.join(__dirname, "tsconfig.json"),
  },
  "settings" : {
    react : {
      version : "detect"
    },
    "import/resolver" : {
      typescript : {}
    }
  },
};

module.exports = {
  "extends" : [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/strict',
    // "plugin:prettier/recommended",
  ],
  "parser"        : "@typescript-eslint/parser",
  "parserOptions" : {
    project : path.join(__dirname, "tsconfig.json"),
  },
  "settings" : {
    react : {
      version : "detect"
    },
    "import/resolver" : {
      typescript : {}
    }
  },
  root      : true,
  "env"   : {
    // "jest/globals" : true,
  },
  overrides : [
    {
      files : ["src/**/*.test.ts"],
      "parserOptions" : {
        project : path.join(__dirname, "tsconfig.json"),
      },
      rules : rules,
    },
    {
      extends : [],
      parser : null,
      parserOptions : {},
      settings : {},
      files : ["*.js"],
      rules : rules,
    },
    {
      "files"   : ["*.json", "*.json5", "*.jsonc"],
      // parser: "jsonc-eslint-parser",
      parser: null,
      parserOptions : {},
      settings : {},
      extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        // "plugin:jsonc/recommended-with-jsonc",
      ],
      "rules"   : {
        "key-spacing" : "off",
        "max-len" : "off",
        "quote-props" : ["error", "always"],
        "quotes" : ["error", "double"],
      },
    },
    {
      "files"   : ["spec/**"],
      "plugins" : ["jest"],
      "extends" : ["plugin:jest/recommended", "plugin:jest/style"],
      "rules"   : {
        "jest/prefer-expect-assertions" : "off",
      },
    },
  ],
  rules : rules,
};
