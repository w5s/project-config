/* cSpell: disable */

// A dictionary of { tool: git_ignore_section}

module.exports = {
  NodeJS: `
  # Logs
  logs
  *.log
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  lerna-debug.log*

  # Diagnostic reports (https://nodejs.org/api/report.html)
  report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

  # Runtime data
  pids
  *.pid
  *.seed
  *.pid.lock

  # Directory for instrumented libs generated by jscoverage/JSCover
  lib-cov

  # Coverage directory used by tools like istanbul
  coverage
  *.lcov

  # nyc test coverage
  .nyc_output

  # Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
  .grunt

  # Bower dependency directory (https://bower.io/)
  bower_components

  # node-waf configuration
  .lock-wscript

  # Compiled binary addons (https://nodejs.org/api/addons.html)
  build/Release

  # Dependency directories
  node_modules/
  jspm_packages/

  # TypeScript v1 declaration files
  typings/

  # TypeScript cache
  *.tsbuildinfo

  # Optional npm cache directory
  .npm

  # Optional eslint cache
  .eslintcache

  # Microbundle cache
  .rpt2_cache/
  .rts2_cache_cjs/
  .rts2_cache_es/
  .rts2_cache_umd/

  # Optional REPL history
  .node_repl_history

  # Output of 'npm pack'
  *.tgz

  # Yarn v2
  .yarn/*
  !.yarn/cache
  !.yarn/patches
  !.yarn/plugins
  !.yarn/releases
  !.yarn/sdks
  !.yarn/versions

  # Yarn Integrity file
  .yarn-integrity

  # dotenv environment variables file
  .env
  .env.test

  # parcel-bundler cache (https://parceljs.org/)
  .cache

  # Next.js build output
  .next

  # Nuxt.js build / generate output
  .nuxt
  dist

  # Gatsby files
  .cache/
  # Comment in the public line in if your project uses Gatsby and not Next.js
  # https://nextjs.org/blog/next-9-1#public-directory-support
  public/

  # vuepress build output
  .vuepress/dist

  # Serverless directories
  .serverless/

  # FuseBox cache
  .fusebox/

  # DynamoDB Local files
  .dynamodb/

  # TernJS port file
  .tern-port`,
  VisualStudioCode: `
  .vscode/*
  !.vscode/settings.json
  !.vscode/tasks.json
  !.vscode/launch.json
  !.vscode/extensions.json
  !.vscode/*.code-snippets`,
  macOS: `
  # General
  .DS_Store
  .AppleDouble
  .LSOverride

  # Icon must end with two \\r
  Icon

  # Thumbnails
  ._*

  # Files that might appear in the root of a volume
  .DocumentRevisions-V100
  .fseventsd
  .Spotlight-V100
  .TemporaryItems
  .Trashes
  .VolumeIcon.icns
  .com.apple.timemachine.donotpresent

  # Directories potentially created on remote AFP share
  .AppleDB
  .AppleDesktop
  Network Trash Folder
  Temporary Items
  .apdisk`,
};
