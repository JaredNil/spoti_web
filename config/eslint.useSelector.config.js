export const eslintUseSelectorConfig = [
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useSelector'],
              message: '❌ Прямой импорт useSelector запрещен. Используй useAppSelector из @/shared/hooks/useAppSelector.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/hooks/useAppSelector.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
