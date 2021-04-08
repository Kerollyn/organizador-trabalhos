module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/prefer-default-export': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        camelcase: 'off',

        // Colocado depois
        'no-console': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/prop-types': 'off',
    },
}
