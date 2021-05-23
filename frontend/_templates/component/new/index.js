// eslint-disable-next-line import/no-extraneous-dependencies
const changeCase = require('change-case');

const initialName = process.argv[4];

module.exports = {
  prompt: ({ prompter: { prompt } }) =>
    prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What’s the name of the component you want to create?',
        skip: !!initialName,
        result: (name) => changeCase.pascal(name),
        initial: changeCase.pascal(initialName),
        validate: (name) => name.length > 2,
      },
    ])
      .then((options) => {
        const { name } = options;
        return {
          ...options,
          title: `components/${name}`,
          path: `components/${name}`,
          root: './src',
        };
      }),
};
