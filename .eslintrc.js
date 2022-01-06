module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "sonarjs"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      // Enforce that all variables, functions and properties follow are camelCase
      { selector: "variableLike", format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      // Enforce that boolean variables are prefixed with an allowed verb
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      // Enforce that interface names do not begin with an I
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      // Ignore destructed names
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
    ],
  },
};
