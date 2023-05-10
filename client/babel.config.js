// module.exports = {
//     presets: [
//       '@babel/preset-env',
//       ['@babel/preset-react', {runtime: 'automatic'}],
//     ],
//     transform: {
//         '^.+\\.jsx?$': 'babel-jest',
//       },
//   };

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
};
// module.exports = {
//     preset: 'ts-jest',
//     transform: {
//       '^.+\\.(js|jsx)$': 'babel-jest',
//       '^.+\\.(ts|tsx)$': 'ts-jest',
//     },
//     moduleNameMapper: {
//       '\\.(css|less|scss)$': 'identity-obj-proxy',
//     },
//     globals: {
//       'ts-jest': {
//         tsconfig: 'tsconfig.test.json',
//       },
//     },
//     testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
//     testEnvironment: 'jsdom',
//   };

// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     moduleNameMapper: {
//       '^@/(.*)$': '<rootDir>/src/$1'
// }};


// module.exports = {
//     "presets": [
//       [
//         "@babel/preset-react",
//         {
//           "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
//           "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
//           "throwIfNamespace": false, // defaults to true
//           "runtime": "classic" // defaults to classic
//           // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
//         }
//       ]
//     ]
//   }