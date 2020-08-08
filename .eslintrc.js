module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      createClass: "createReactClass", 
      pragma: "React",
      version: "detect", 
      flowVersion: "0.53",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: [
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
}
