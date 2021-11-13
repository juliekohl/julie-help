module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: ['**/src/(components|pages|utils)/**/*.spec.ts'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  globals: {
    // without this settings ts-jest shows warning that it can't find package root
    // More info here: https://github.com/kulshekhar/ts-jest/issues/823
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
}
