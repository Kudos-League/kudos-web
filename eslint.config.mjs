import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
// https://www.npmjs.com/package/typescript-eslint/v/8.0.0-alpha.10?activeTab=versions
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
// https://github.com/import-js/eslint-plugin-import/pull/2873
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

console.log(compat);

export default [
	...fixupConfigRules(
		compat.extends(
			'prettier',
			'eslint:recommended',
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended'
		)
	),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			prettier
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: true
			}
		},

		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json'
				},

				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				}
			},

			react: {
				version: 'detect'
			}
		},

		rules: {
			indent: ['error', 'tab'],
			'prettier/prettier': 'warn',
			eqeqeq: ['warn', 'smart'],
			quotes: ['error', 'single'],
			'jsx-quotes': ['error', 'prefer-single'],
			'no-debugger': 'warn',
			'react/no-children-prop': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/no-unescaped-entities': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/display-name': 'off',
			'react/jsx-key': 'warn',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
			'no-empty': 'warn',
			'prefer-const': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn'
		}
	}
];
