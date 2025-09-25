/** @type {import('jest').Config} */
export default {
    // Run tests in Node (no DOM overhead)
    testEnvironment: 'node',

    // Where your tests live
    roots: ['<rootDir>/scripts/tests'],

    // Match your naming pattern
    testMatch: ['**/*.test.js'],

    // Tell Jest to use Node’s ESM resolver
    transform: { '^.+\\.js$': 'babel-jest' },

    // Support your path aliases (@components, @scripts)
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@scripts/(.*)$': '<rootDir>/scripts/$1',
    },
}
