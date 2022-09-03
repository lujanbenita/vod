/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");
const { compilerOptions } = require("../tsconfig.json");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  rootDir: "../",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
    "<rootDir>/webdriverio/",
  ],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // changed this to only try to transform js files after upgrading to Babel 7 caused it to error on json files.
    "^.+\\.(ts|tsx)$": "ts-jest", // TS transform as a new property to allow for easy overwrites
  },
  transformIgnorePatterns: ["/node_modules/(?!(ol)/)/"],
  collectCoverageFrom: ["./src/**"],
  testEnvironment: "jest-environment-jsdom",
};

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  nextJestConfig.transformIgnorePatterns[0] = "/node_modules/(?!(ol)/)/";
  return nextJestConfig;
}

module.exports = jestConfig;
