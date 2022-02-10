module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-viewport/register', 'storybook-preset-craco'],
  core: {
    builder: "webpack5"
  }
};