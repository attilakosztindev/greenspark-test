module.exports = {
  preset: 'ts-jest',
  setupFiles: ["<rootDir>/tests/setup.ts"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^vuetify/components$":
      "<rootDir>/node_modules/vuetify/lib/components/index.mjs",
    "^vuetify/directives$":
      "<rootDir>/node_modules/vuetify/lib/directives/index.mjs",
    "^vuetify/lib/(.*)$": "<rootDir>/node_modules/vuetify/lib/$1",
    "\\.(css|sass|scss)$": "<rootDir>/tests/styleMock.js"
  },
  moduleFileExtensions: ["js", "ts", "json", "vue", "pug"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsConfig: "tsconfig.json",
        useESM: true,
        babelConfig: true
      }
    ],
    "^.+\\.vue$": [
      "@vue/vue3-jest",
      {
        templateCompiler: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("app-"),
          },
        },
      }
    ],
    "^.+\\.pug$": "pug-jest",
    "^.+\\.m?js$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!vuetify|@vuetify|@mdi/.*)"
  ],
  testEnvironment: "jsdom",
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/**/*.stories.{js,ts}',
    '!src/**/*.d.ts',
  ],
};
