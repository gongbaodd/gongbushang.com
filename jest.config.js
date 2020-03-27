module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/components/*.vue",
    "<rootDir>/pages/**/*.vue",
    "<rootDir>/pages/*.vue",
  ],
  clearMocks: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  setupFiles: ["<rootDir>/config/jest.js"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
};
