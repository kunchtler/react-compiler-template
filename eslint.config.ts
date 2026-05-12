import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import communityReact from "@eslint-react/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        extends: [
            js.configs.recommended,
            // See https://typescript-eslint.io/users/configs/#strict-type-checked
            tseslint.configs.strictTypeChecked,
            // See https://typescript-eslint.io/users/configs/#stylistic-type-checked
            tseslint.configs.stylisticTypeChecked,

            // Community plugin
            // From https://github.com/Rel1cx/eslint-react
            // See https://eslint-react.xyz/docs/presets
            communityReact.configs["recommended-type-checked"],

            // Official react eslint plugins
            reactHooks.configs.flat.recommended,
            // React for vite HMR
            reactRefresh.configs.vite,

            // To make Prettier and ESLint compatible together
            eslintConfigPrettier
        ],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            },
            globals: globals.browser
        },
        rules: {
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksVoidReturn: {
                        arguments: false
                    }
                }
            ],
            "@typescript-eslint/no-unnecessary-template-expression": "warn",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/no-extraneous-class": "warn",
            "@typescript-eslint/no-unnecessary-condition": [
                "error",
                { allowConstantLoopConditions: "only-allowed-literals" }
            ]
            // "react-hooks/exhaustive-deps": ["warn", { additionalHooks: "(useLazyRef)" }]
        }
    }
]);
