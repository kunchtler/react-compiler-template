import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "@eslint-react/eslint-plugin";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNamingConvention from "eslint-plugin-react-naming-convention";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";

// Use "pnpm eslint --inspect-config" to more easily see rules.

export default tseslint.config({
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: ["dist"],
    extends: [
        js.configs.recommended,
        // See https://typescript-eslint.io/users/configs/#strict-type-checked
        tseslint.configs.strictTypeChecked,
        // See https://typescript-eslint.io/users/configs/#stylistic-type-checked
        tseslint.configs.stylisticTypeChecked,

        // From https://github.com/Rel1cx/eslint-react
        // See https://eslint-react.xyz/docs/presets
        react.configs["recommended-type-checked"],
        reactHooksExtra.configs.recommended,
        reactNamingConvention.configs.recommended,

        // Official React (Facebook) configs
        reactHooks.configs["recommended-latest"],
        reactCompiler.configs.recommended,

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
        // ecmaVersion: 2021,
        globals: globals.browser
    },
    // settings: {
    //     react: {
    //         version: "detect"
    //     }
    // }
    plugins: {
        // "react-hooks": reactHooks,
        // "react-refresh": reactRefresh
        // "react-compiler": reactCompiler
    },
    rules: {
        "@typescript-eslint/no-non-null-assertion": "off"
    }
});
