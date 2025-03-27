const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
            {
              sourceTag: 'application:browser',
              onlyDependOnLibsWithTags: ['packages:browser', 'packages:shared'],
            },
            {
              sourceTag: 'application:server',
              onlyDependOnLibsWithTags: ['packages:server', 'packages:shared'],
            },
            {
              sourceTag: 'packages:shared',
              onlyDependOnLibsWithTags: ['packages:shared'],
            },
            {
              sourceTag: 'packages:browser',
              onlyDependOnLibsWithTags: ['packages:browser', 'packages:shared'],
            },
            {
              sourceTag: 'packages:server',
              onlyDependOnLibsWithTags: ['packages:server', 'packages:shared'],
            },
            {
              sourceTag: 'packages:design-system',
              onlyDependOnLibsWithTags: ['packages:design-system'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
