export const defaultIgnores = [
  // Lock files
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  // Commonly ignored
  '**/output',
  '**/.output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.cache',

  // Well known extensions to ignore
  '**/*.min.*',
  '**/*.timestamp-*.mjs',

  // Framework specific temporary folder
  '.go/',
  '.pnpm-store/',
  '**/.vitepress/cache',
  '**/.vite-inspect',
  '**/.history',
  '**/.nuxt',
  '**/.next',
  '**/next-env.d.ts',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.idea',
  '**/.yarn',
  '**/__snapshots__/**',

  // git submodules (makefile-core / makefile-ci)
  '.modules/',

  // AI related
  '**/.context',
  '**/.claude',
  '**/.agents',
  '**/.*/skills',
];
