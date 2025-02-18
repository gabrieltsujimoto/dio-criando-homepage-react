module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};