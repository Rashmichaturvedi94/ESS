const { join } = require('path');

const tsconfigPath = join('.', '/tsconfig.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    semi: ['error', 'always'],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // TODO: consider adding e.g. https://github.com/milesj/babel-plugin-typescript-to-proptypes
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    // storybook requires default exports in the CSF format
    // ref. to https://storybook.js.org/docs/formats/component-story-format for details
    {
      files: ['*.stories.*', 'src/reportWebVitals.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parserOptions: {
    project: tsconfigPath,
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    tsconfigRootDir: __dirname,
  },
};
