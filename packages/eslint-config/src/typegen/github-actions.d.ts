/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * enforce a consistent casing convention for workflow `name` values.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/action-name-casing
   */
  'github-actions/action-name-casing'?: Linter.RuleEntry<GithubActionsActionNameCasing>
  /**
   * enforce a consistent casing convention for declared action and workflow input identifiers.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/input-id-case
   */
  'github-actions/input-id-case'?: Linter.RuleEntry<GithubActionsInputIdCase>
  /**
   * enforce a consistent casing convention for workflow job identifiers.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/job-id-casing
   */
  'github-actions/job-id-casing'?: Linter.RuleEntry<GithubActionsJobIdCasing>
  /**
   * enforce a maximum number of jobs per workflow file so large pipelines stay modular and reviewable.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/max-jobs-per-action
   */
  'github-actions/max-jobs-per-action'?: Linter.RuleEntry<GithubActionsMaxJobsPerAction>
  /**
   * disallow case-insensitive collisions between action input ids.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-case-insensitive-input-id-collision
   */
  'github-actions/no-case-insensitive-input-id-collision'?: Linter.RuleEntry<[]>
  /**
   * disallow `github/codeql-action/autobuild` when CodeQL is only scanning JavaScript/TypeScript.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-codeql-autobuild-for-javascript-typescript
   */
  'github-actions/no-codeql-autobuild-for-javascript-typescript'?: Linter.RuleEntry<[]>
  /**
   * disallow CodeQL language matrices that split JavaScript and TypeScript instead of using `javascript-typescript`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-codeql-javascript-typescript-split-language-matrix
   */
  'github-actions/no-codeql-javascript-typescript-split-language-matrix'?: Linter.RuleEntry<[]>
  /**
   * disallow `INPUT_*` environment-variable access in composite actions and require `inputs.*` context references.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-composite-input-env-access
   */
  'github-actions/no-composite-input-env-access'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated Node.js runtimes in action metadata `runs.using`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-deprecated-node-runtime
   */
  'github-actions/no-deprecated-node-runtime'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate step IDs in `runs.steps` for composite actions.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-duplicate-composite-step-id
   */
  'github-actions/no-duplicate-composite-step-id'?: Linter.RuleEntry<[]>
  /**
   * disallow empty or whitespace-only entries in workflow-template `filePatterns`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-empty-template-file-pattern
   */
  'github-actions/no-empty-template-file-pattern'?: Linter.RuleEntry<[]>
  /**
   * disallow reusable-workflow jobs declared with `jobs.<id>.uses` when you want every job defined inline in the workflow file.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-external-job
   */
  'github-actions/no-external-job'?: Linter.RuleEntry<[]>
  /**
   * disallow hardcoded `main`/`master` branch literals in workflow template YAML files.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-hardcoded-default-branch-in-template
   */
  'github-actions/no-hardcoded-default-branch-in-template'?: Linter.RuleEntry<[]>
  /**
   * disallow `.svg` extensions in workflow-template `iconName` values.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-icon-file-extension-in-template-icon-name
   */
  'github-actions/no-icon-file-extension-in-template-icon-name'?: Linter.RuleEntry<[]>
  /**
   * disallow `secrets: inherit` on reusable-workflow jobs so callers pass only the named secrets each workflow actually needs.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-inherit-secrets
   */
  'github-actions/no-inherit-secrets'?: Linter.RuleEntry<[]>
  /**
   * disallow unavailable contexts in workflow-level and job-level `concurrency` expressions.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-invalid-concurrency-context
   */
  'github-actions/no-invalid-concurrency-context'?: Linter.RuleEntry<[]>
  /**
   * disallow unsupported keys in common GitHub Actions workflow mappings.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-invalid-key
   */
  'github-actions/no-invalid-key'?: Linter.RuleEntry<[]>
  /**
   * disallow unsupported keys on jobs that call reusable workflows via `jobs.<job_id>.uses`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-invalid-reusable-workflow-job-key
   */
  'github-actions/no-invalid-reusable-workflow-job-key'?: Linter.RuleEntry<[]>
  /**
   * disallow syntactically invalid regexes in workflow-template `filePatterns`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-invalid-template-file-pattern-regex
   */
  'github-actions/no-invalid-template-file-pattern-regex'?: Linter.RuleEntry<[]>
  /**
   * disallow `workflow_call` output values that use unavailable contexts or fail to map from `jobs.<job_id>.outputs.<output_name>`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-invalid-workflow-call-output-value
   */
  'github-actions/no-invalid-workflow-call-output-value'?: Linter.RuleEntry<[]>
  /**
   * disallow guaranteed overlapping Dependabot directory selectors for the same package ecosystem and target branch.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-overlapping-dependabot-directories
   */
  'github-actions/no-overlapping-dependabot-directories'?: Linter.RuleEntry<[]>
  /**
   * disallow path separators in workflow-template `iconName` values.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-path-separators-in-template-icon-name
   */
  'github-actions/no-path-separators-in-template-icon-name'?: Linter.RuleEntry<[]>
  /**
   * disallow `runs.post-if` when `runs.post` is not configured in action metadata.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-post-if-without-post
   */
  'github-actions/no-post-if-without-post'?: Linter.RuleEntry<[]>
  /**
   * disallow `actions/checkout` configurations in `pull_request_target` workflows that fetch pull request head refs, SHAs, or repositories into a privileged run.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-pr-head-checkout-in-pull-request-target
   */
  'github-actions/no-pr-head-checkout-in-pull-request-target'?: Linter.RuleEntry<[]>
  /**
   * disallow `runs.pre-if` when `runs.pre` is not configured in action metadata.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-pre-if-without-pre
   */
  'github-actions/no-pre-if-without-pre'?: Linter.RuleEntry<[]>
  /**
   * disallow action inputs that set both `required: true` and `default`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-required-input-with-default
   */
  'github-actions/no-required-input-with-default'?: Linter.RuleEntry<[]>
  /**
   * disallow direct `secrets.*` references in job and step `if` conditionals; move secret values into `env` first and condition on that instead.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-secrets-in-if
   */
  'github-actions/no-secrets-in-if'?: Linter.RuleEntry<[]>
  /**
   * disallow self-hosted runners in workflows triggered by fork-capable pull-request events that can execute untrusted contributor activity.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-self-hosted-runner-on-fork-pr-events
   */
  'github-actions/no-self-hosted-runner-on-fork-pr-events'?: Linter.RuleEntry<[]>
  /**
   * disallow workflow-template `filePatterns` that match subdirectory paths instead of repository-root files.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-subdirectory-template-file-pattern
   */
  'github-actions/no-subdirectory-template-file-pattern'?: Linter.RuleEntry<[]>
  /**
   * disallow `$default-branch` placeholder usage outside workflow template YAML files.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-template-placeholder-in-non-template-workflow
   */
  'github-actions/no-template-placeholder-in-non-template-workflow'?: Linter.RuleEntry<[]>
  /**
   * disallow top-level workflow `env` when you want environment variables scoped closer to the jobs and steps that use them.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-top-level-env
   */
  'github-actions/no-top-level-env'?: Linter.RuleEntry<[]>
  /**
   * disallow top-level workflow `permissions` when you want every job to declare its own token scope explicitly.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-top-level-permissions
   */
  'github-actions/no-top-level-permissions'?: Linter.RuleEntry<[]>
  /**
   * disallow universal catch-all regexes in workflow-template `filePatterns`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-universal-template-file-pattern
   */
  'github-actions/no-universal-template-file-pattern'?: Linter.RuleEntry<[]>
  /**
   * disallow Dependabot `multi-ecosystem-group` references that do not match a declared top-level group.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unknown-dependabot-multi-ecosystem-group
   */
  'github-actions/no-unknown-dependabot-multi-ecosystem-group'?: Linter.RuleEntry<[]>
  /**
   * disallow `inputs.<id>` references in composite action metadata when the input id is not declared.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unknown-input-reference-in-composite
   */
  'github-actions/no-unknown-input-reference-in-composite'?: Linter.RuleEntry<[]>
  /**
   * disallow `needs.*.outputs.*` and reusable-workflow `jobs.*.outputs.*` references that point at undeclared jobs or outputs.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unknown-job-output-reference
   */
  'github-actions/no-unknown-job-output-reference'?: Linter.RuleEntry<[]>
  /**
   * disallow `steps.<id>.*` references that target a missing step id or a step that has not run yet.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unknown-step-reference
   */
  'github-actions/no-unknown-step-reference'?: Linter.RuleEntry<[]>
  /**
   * disallow directly embedding untrusted event payload values inside `run` scripts; move them through `env` first or pass them to an action input.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-untrusted-input-in-run
   */
  'github-actions/no-untrusted-input-in-run'?: Linter.RuleEntry<[]>
  /**
   * disallow the top-level Dependabot `enable-beta-ecosystems` setting because GitHub currently documents it as unused.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unused-dependabot-enable-beta-ecosystems
   */
  'github-actions/no-unused-dependabot-enable-beta-ecosystems'?: Linter.RuleEntry<[]>
  /**
   * disallow declared composite-action inputs that are never referenced.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-unused-input-in-composite
   */
  'github-actions/no-unused-input-in-composite'?: Linter.RuleEntry<[]>
  /**
   * disallow `permissions: write-all` so workflows and jobs keep GitHub token scopes least-privileged.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/no-write-all-permissions
   */
  'github-actions/no-write-all-permissions'?: Linter.RuleEntry<[]>
  /**
   * require third-party `uses` references to pin full-length commit SHAs instead of mutable tags or branches.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/pin-action-shas
   */
  'github-actions/pin-action-shas'?: Linter.RuleEntry<[]>
  /**
   * require action metadata files to prefer `action.yml` over `action.yaml`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-action-yml
   */
  'github-actions/prefer-action-yml'?: Linter.RuleEntry<[]>
  /**
   * disallow `strategy.fail-fast: false` so failing matrix jobs can stop redundant work sooner.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-fail-fast
   */
  'github-actions/prefer-fail-fast'?: Linter.RuleEntry<[]>
  /**
   * enforce a consistent file extension for GitHub Actions workflow files.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-file-extension
   */
  'github-actions/prefer-file-extension'?: Linter.RuleEntry<GithubActionsPreferFileExtension>
  /**
   * enforce the `inputs` context instead of `github.event.inputs` in `workflow_dispatch` workflows so boolean inputs preserve their native type semantics.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-inputs-context
   */
  'github-actions/prefer-inputs-context'?: Linter.RuleEntry<[]>
  /**
   * enforce a consistent style for step-level `uses` references.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-step-uses-style
   */
  'github-actions/prefer-step-uses-style'?: Linter.RuleEntry<GithubActionsPreferStepUsesStyle>
  /**
   * require workflow template files to prefer `.yml` over `.yaml`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/prefer-template-yml-extension
   */
  'github-actions/prefer-template-yml-extension'?: Linter.RuleEntry<[]>
  /**
   * require a non-empty string workflow `name` so workflow runs stay readable in the GitHub Actions UI.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-action-name
   */
  'github-actions/require-action-name'?: Linter.RuleEntry<[]>
  /**
   * require a non-empty string workflow `run-name` when you want queued and in-progress runs to remain self-describing.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-action-run-name
   */
  'github-actions/require-action-run-name'?: Linter.RuleEntry<[]>
  /**
   * require an `actions/checkout` step before using repository-local step actions so local action paths resolve reliably.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-checkout-before-local-action
   */
  'github-actions/require-checkout-before-local-action'?: Linter.RuleEntry<[]>
  /**
   * require jobs running CodeQL actions to grant `actions: read`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-actions-read
   */
  'github-actions/require-codeql-actions-read'?: Linter.RuleEntry<[]>
  /**
   * require CodeQL `push` and `pull_request` triggers to scope branches explicitly.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-branch-filters
   */
  'github-actions/require-codeql-branch-filters'?: Linter.RuleEntry<[]>
  /**
   * require CodeQL analyze steps to set `with.category` using `matrix.language` when the job uses a language matrix.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-category-when-language-matrix
   */
  'github-actions/require-codeql-category-when-language-matrix'?: Linter.RuleEntry<[]>
  /**
   * require CodeQL workflows to listen for `pull_request`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-pull-request-trigger
   */
  'github-actions/require-codeql-pull-request-trigger'?: Linter.RuleEntry<[]>
  /**
   * require CodeQL workflows to include a scheduled trigger for periodic re-analysis.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-schedule
   */
  'github-actions/require-codeql-schedule'?: Linter.RuleEntry<[]>
  /**
   * require jobs running CodeQL analysis to grant `security-events: write`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-codeql-security-events-write
   */
  'github-actions/require-codeql-security-events-write'?: Linter.RuleEntry<[]>
  /**
   * require each composite action step to declare a descriptive `name`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-composite-step-name
   */
  'github-actions/require-composite-step-name'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries to define effective `assignees` directly or via a multi-ecosystem group.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-assignees
   */
  'github-actions/require-dependabot-assignees'?: Linter.RuleEntry<[]>
  /**
   * require minimum GitHub token permissions for Dependabot pull request automation steps.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-automation-permissions
   */
  'github-actions/require-dependabot-automation-permissions'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot pull request automation workflows to listen for `pull_request`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-automation-pull-request-trigger
   */
  'github-actions/require-dependabot-automation-pull-request-trigger'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot automation jobs to guard execution on `dependabot[bot]`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-bot-actor-guard
   */
  'github-actions/require-dependabot-bot-actor-guard'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot commit messages to set `commit-message.include: "scope"`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-commit-message-include-scope
   */
  'github-actions/require-dependabot-commit-message-include-scope'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries to define an effective `commit-message.prefix` directly or via a multi-ecosystem group.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-commit-message-prefix
   */
  'github-actions/require-dependabot-commit-message-prefix'?: Linter.RuleEntry<[]>
  /**
   * require npm-like Dependabot update entries to define `commit-message.prefix-development`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-commit-message-prefix-development
   */
  'github-actions/require-dependabot-commit-message-prefix-development'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries to declare a `cooldown` policy.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-cooldown
   */
  'github-actions/require-dependabot-cooldown'?: Linter.RuleEntry<[]>
  /**
   * require every Dependabot `updates` entry to define exactly one of `directory` or `directories`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-directory
   */
  'github-actions/require-dependabot-directory'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot `github-actions` update entries to use `directory: "/"`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-github-actions-directory-root
   */
  'github-actions/require-dependabot-github-actions-directory-root'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries to define effective `labels` directly or via a multi-ecosystem group.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-labels
   */
  'github-actions/require-dependabot-labels'?: Linter.RuleEntry<[]>
  /**
   * require standalone Dependabot update entries to define `open-pull-requests-limit`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-open-pull-requests-limit
   */
  'github-actions/require-dependabot-open-pull-requests-limit'?: Linter.RuleEntry<[]>
  /**
   * require every Dependabot `updates` entry to define a non-empty `package-ecosystem`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-package-ecosystem
   */
  'github-actions/require-dependabot-package-ecosystem'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries that use `multi-ecosystem-group` to define non-empty `patterns`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-patterns-for-multi-ecosystem-group
   */
  'github-actions/require-dependabot-patterns-for-multi-ecosystem-group'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot `schedule.cronjob` for `interval: cron` and disallow it for non-cron intervals.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-schedule-cronjob
   */
  'github-actions/require-dependabot-schedule-cronjob'?: Linter.RuleEntry<[]>
  /**
   * require every Dependabot update entry to define a valid effective `schedule.interval`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-schedule-interval
   */
  'github-actions/require-dependabot-schedule-interval'?: Linter.RuleEntry<[]>
  /**
   * require non-cron Dependabot schedules to declare an explicit `schedule.time`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-schedule-time
   */
  'github-actions/require-dependabot-schedule-time'?: Linter.RuleEntry<[]>
  /**
   * require explicit `schedule.timezone` when Dependabot schedules use `time` or `cron` semantics.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-schedule-timezone
   */
  'github-actions/require-dependabot-schedule-timezone'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot update entries to define an effective `target-branch` directly or via a multi-ecosystem group.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-target-branch
   */
  'github-actions/require-dependabot-target-branch'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot configuration files to define a non-empty top-level `updates` sequence.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-updates
   */
  'github-actions/require-dependabot-updates'?: Linter.RuleEntry<[]>
  /**
   * require Dependabot configuration files to declare `version: 2`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-version
   */
  'github-actions/require-dependabot-version'?: Linter.RuleEntry<[]>
  /**
   * require npm Dependabot update entries to define `versioning-strategy`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependabot-versioning-strategy-for-npm
   */
  'github-actions/require-dependabot-versioning-strategy-for-npm'?: Linter.RuleEntry<[]>
  /**
   * require dependency-review workflow files to invoke `actions/dependency-review-action`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependency-review-action
   */
  'github-actions/require-dependency-review-action'?: Linter.RuleEntry<[]>
  /**
   * require `actions/dependency-review-action` steps to set `with.fail-on-severity`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependency-review-fail-on-severity
   */
  'github-actions/require-dependency-review-fail-on-severity'?: Linter.RuleEntry<[]>
  /**
   * require jobs using `actions/dependency-review-action` to grant effective `contents: read`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependency-review-permissions-contents-read
   */
  'github-actions/require-dependency-review-permissions-contents-read'?: Linter.RuleEntry<[]>
  /**
   * require workflows using `actions/dependency-review-action` to listen for `pull_request`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-dependency-review-pull-request-trigger
   */
  'github-actions/require-dependency-review-pull-request-trigger'?: Linter.RuleEntry<[]>
  /**
   * require `dependabot/fetch-metadata` steps to configure `with.github-token`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-fetch-metadata-github-token
   */
  'github-actions/require-fetch-metadata-github-token'?: Linter.RuleEntry<[]>
  /**
   * require every workflow job to declare a non-empty string `name` for readable run summaries.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-job-name
   */
  'github-actions/require-job-name'?: Linter.RuleEntry<[]>
  /**
   * require every workflow step to declare a non-empty string `name` so job logs remain readable.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-job-step-name
   */
  'github-actions/require-job-step-name'?: Linter.RuleEntry<[]>
  /**
   * require every non-reusable workflow job to define a bounded `timeout-minutes` value.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-job-timeout-minutes
   */
  'github-actions/require-job-timeout-minutes'?: Linter.RuleEntry<GithubActionsRequireJobTimeoutMinutes>
  /**
   * require pull-request validation workflows to include the `merge_group` trigger so required checks also run for merge queues.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-merge-group-trigger
   */
  'github-actions/require-merge-group-trigger'?: Linter.RuleEntry<[]>
  /**
   * require `on.pull_request_target` triggers to scope target base branches with `branches` or `branches-ignore` so privileged workflows do not react to every branch by default.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-pull-request-target-branches
   */
  'github-actions/require-pull-request-target-branches'?: Linter.RuleEntry<[]>
  /**
   * require `run` steps to use an explicit shell directly or through `defaults.run.shell` so execution behavior stays predictable across runners.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-run-step-shell
   */
  'github-actions/require-run-step-shell'?: Linter.RuleEntry<[]>
  /**
   * require workflow jobs containing run steps to declare a `timeout-minutes` value.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-run-step-timeout
   */
  'github-actions/require-run-step-timeout'?: Linter.RuleEntry<[]>
  /**
   * require jobs uploading SARIF to GitHub code scanning to grant `security-events: write`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-sarif-upload-security-events-write
   */
  'github-actions/require-sarif-upload-security-events-write'?: Linter.RuleEntry<[]>
  /**
   * require `ossf/scorecard-action` steps to set `results_format: sarif`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-scorecard-results-format-sarif
   */
  'github-actions/require-scorecard-results-format-sarif'?: Linter.RuleEntry<[]>
  /**
   * require workflows using `ossf/scorecard-action` to upload SARIF results to GitHub code scanning.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-scorecard-upload-sarif-step
   */
  'github-actions/require-scorecard-upload-sarif-step'?: Linter.RuleEntry<[]>
  /**
   * require secret scanning workflows to grant `contents: read`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-secret-scan-contents-read
   */
  'github-actions/require-secret-scan-contents-read'?: Linter.RuleEntry<[]>
  /**
   * require secret scanning workflows to checkout full history with `fetch-depth: 0`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-secret-scan-fetch-depth-zero
   */
  'github-actions/require-secret-scan-fetch-depth-zero'?: Linter.RuleEntry<[]>
  /**
   * require secret scanning workflows to include a scheduled trigger.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-secret-scan-schedule
   */
  'github-actions/require-secret-scan-schedule'?: Linter.RuleEntry<[]>
  /**
   * require non-empty `categories` in workflow-template metadata.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-template-categories
   */
  'github-actions/require-template-categories'?: Linter.RuleEntry<[]>
  /**
   * require non-empty `filePatterns` in workflow-template metadata.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-template-file-patterns
   */
  'github-actions/require-template-file-patterns'?: Linter.RuleEntry<[]>
  /**
   * require local `iconName` references in workflow-template metadata to point to existing SVG files.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-template-icon-file-exists
   */
  'github-actions/require-template-icon-file-exists'?: Linter.RuleEntry<[]>
  /**
   * require `iconName` in workflow-template `.properties.json` metadata.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-template-icon-name
   */
  'github-actions/require-template-icon-name'?: Linter.RuleEntry<[]>
  /**
   * require workflow template YAML files to declare a non-empty top-level `name`.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-template-workflow-name
   */
  'github-actions/require-template-workflow-name'?: Linter.RuleEntry<[]>
  /**
   * require explicit `types` filters for selected multi-activity workflow events so workflows do not subscribe to every supported activity implicitly.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-trigger-types
   */
  'github-actions/require-trigger-types'?: Linter.RuleEntry<[]>
  /**
   * require TruffleHog workflows to enable verified-results mode explicitly.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-trufflehog-verified-results-mode
   */
  'github-actions/require-trufflehog-verified-results-mode'?: Linter.RuleEntry<[]>
  /**
   * require every `workflow_call` input to declare one of the documented reusable-workflow input types so callers and validators agree on interface semantics.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-call-input-type
   */
  'github-actions/require-workflow-call-input-type'?: Linter.RuleEntry<[]>
  /**
   * require every `workflow_call` output to declare a non-empty `value` so reusable workflows expose concrete runtime output mappings.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-call-output-value
   */
  'github-actions/require-workflow-call-output-value'?: Linter.RuleEntry<[]>
  /**
   * require workflow-level `concurrency` so redundant runs can be deduplicated predictably.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-concurrency
   */
  'github-actions/require-workflow-concurrency'?: Linter.RuleEntry<GithubActionsRequireWorkflowConcurrency>
  /**
   * require every `workflow_dispatch` input to declare an explicit `type` so manual runs expose clearer controls and preserve intended value semantics.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-dispatch-input-type
   */
  'github-actions/require-workflow-dispatch-input-type'?: Linter.RuleEntry<[]>
  /**
   * require descriptions for `workflow_dispatch` inputs and reusable workflow interfaces so manual forms and callable workflows stay self-documenting.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-interface-description
   */
  'github-actions/require-workflow-interface-description'?: Linter.RuleEntry<[]>
  /**
   * require explicit `permissions` to avoid relying on GitHub Actions' default token scope.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-permissions
   */
  'github-actions/require-workflow-permissions'?: Linter.RuleEntry<GithubActionsRequireWorkflowPermissions>
  /**
   * require `on.workflow_run` triggers to scope upstream branches with `branches` or `branches-ignore` so follow-up workflows do not react to every branch indiscriminately.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-run-branches
   */
  'github-actions/require-workflow-run-branches'?: Linter.RuleEntry<[]>
  /**
   * require each workflow template YAML file to have a matching `.properties.json` metadata file.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-template-pair
   */
  'github-actions/require-workflow-template-pair'?: Linter.RuleEntry<[]>
  /**
   * require each workflow-template `.properties.json` file to have a matching template YAML file.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/require-workflow-template-properties-pair
   */
  'github-actions/require-workflow-template-properties-pair'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid literal `timeout-minutes` values for jobs and steps.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/valid-timeout-minutes
   */
  'github-actions/valid-timeout-minutes'?: Linter.RuleEntry<GithubActionsValidTimeoutMinutes>
  /**
   * disallow invalid GitHub Actions trigger events under the workflow `on` key.
   * @see https://nick2bad4u.github.io/eslint-plugin-github-actions-2/docs/rules/valid-trigger-events
   */
  'github-actions/valid-trigger-events'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- github-actions/action-name-casing -----
type GithubActionsActionNameCasing = []|[(("camelCase" | "kebab-case" | "PascalCase" | "SCREAMING_SNAKE_CASE" | "snake_case" | "Title Case" | "Train-Case") | {
  
  ignores?: string[]
  
  camelCase?: boolean
  
  "kebab-case"?: boolean
  
  PascalCase?: boolean
  
  SCREAMING_SNAKE_CASE?: boolean
  
  snake_case?: boolean
  
  "Title Case"?: boolean
  
  "Train-Case"?: boolean
})]
// ----- github-actions/input-id-case -----
type GithubActionsInputIdCase = []|[(("camelCase" | "kebab-case" | "PascalCase" | "SCREAMING_SNAKE_CASE" | "snake_case" | "Train-Case") | {
  
  ignores?: string[]
  
  camelCase?: boolean
  
  "kebab-case"?: boolean
  
  PascalCase?: boolean
  
  SCREAMING_SNAKE_CASE?: boolean
  
  snake_case?: boolean
  
  "Train-Case"?: boolean
})]
// ----- github-actions/job-id-casing -----
type GithubActionsJobIdCasing = []|[(("camelCase" | "kebab-case" | "PascalCase" | "SCREAMING_SNAKE_CASE" | "snake_case" | "Train-Case") | {
  
  ignores?: string[]
  
  camelCase?: boolean
  
  "kebab-case"?: boolean
  
  PascalCase?: boolean
  
  SCREAMING_SNAKE_CASE?: boolean
  
  snake_case?: boolean
  
  "Train-Case"?: boolean
})]
// ----- github-actions/max-jobs-per-action -----
type GithubActionsMaxJobsPerAction = []|[number]
// ----- github-actions/prefer-file-extension -----
type GithubActionsPreferFileExtension = []|[(("yaml" | "yml") | {
  
  caseSensitive?: boolean
  
  extension?: ("yaml" | "yml")
})]
// ----- github-actions/prefer-step-uses-style -----
type GithubActionsPreferStepUsesStyle = []|[(("branch" | "commit" | "release") | {
  
  allowDocker?: boolean
  
  allowRepository?: boolean
  
  branch?: boolean
  
  commit?: boolean
  
  ignores?: string[]
  
  release?: boolean
})]
// ----- github-actions/require-job-timeout-minutes -----
type GithubActionsRequireJobTimeoutMinutes = []|[{
  
  maxMinutes?: number
}]
// ----- github-actions/require-workflow-concurrency -----
type GithubActionsRequireWorkflowConcurrency = []|[{
  
  onlyForEvents?: string[]
  
  requireCancelInProgress?: boolean
}]
// ----- github-actions/require-workflow-permissions -----
type GithubActionsRequireWorkflowPermissions = []|[{
  
  allowJobLevelPermissions?: boolean
}]
// ----- github-actions/valid-timeout-minutes -----
type GithubActionsValidTimeoutMinutes = []|[(number | {
  
  max?: number
  
  min?: number
} | {
  job?: (number | {
    
    max?: number
    
    min?: number
  })
  step?: (number | {
    
    max?: number
    
    min?: number
  })
})]