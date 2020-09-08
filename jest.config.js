module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.[jt]s',
    '!src/**/*.d.ts'
  ],
  coverageReporters: [
    'text',
    'html',
    'cobertura',
    'json-summary',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '\\.[jt]s$': 'babel-jest',
    '\\.(s?css|jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp[34]|webm|wav|m4a|aac|oga)$': 'jest-transform-stub'
  },
};
