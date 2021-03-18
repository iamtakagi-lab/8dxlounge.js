module.exports = {
  "roots": ['<rootDir>'],
  "testMatch": [
    '**/test/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "transform": {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  "moduleNameMapper": {
    "^@/(.+)": "<rootDir>/src/$1"
  },
  "testEnvironment": "node"
}
