export const eslintUseDispatchConfig = [
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useDispatch'],
              message: '❌ Прямой импорт useDispatch запрещен. Используй useAppDispatch из @/shared/hooks/useAppDispatch.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/hooks/useAppDispatch.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
