module.exports = {
    root: true,
    extends: [
        'universe/native',
        'plugin:react-hooks/recommended'
    ],
    overrides: [
        {
            files: ['**/__tests__/*'],
            env: { node: true },
        },
    ],
};