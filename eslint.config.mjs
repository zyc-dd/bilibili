import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': [0]
    }
  })
];

export default eslintConfig;