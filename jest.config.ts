export default {
      testEnvironment: 'jsdom',
      moduleFileExtensions: ['ts', 'tsx', 'js'],
      transform: {
            '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
