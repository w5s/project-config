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
   * validate object with JSON Schema.
   * @see https://nick2bad4u.github.io/eslint-plugin-json-schema-validator-2/docs/rules/no-invalid
   */
  'schema/no-invalid'?: Linter.RuleEntry<SchemaNoInvalid>
}

/* ======= Declarations ======= */
// ----- schema/no-invalid -----
type SchemaNoInvalid = []|[(string | {
  mergeSchemas?: (boolean | [("$schema" | "catalog" | "options"), ("$schema" | "catalog" | "options"), ...(("$schema" | "catalog" | "options"))[]])
  reportMode?: ("all" | "most-specific")
  schemas?: {
    description?: string
    
    fileMatch: [string, ...(string)[]]
    name?: string
    schema: ({
      [k: string]: unknown | undefined
    } | string)
    [k: string]: unknown | undefined
  }[]
  useSchemastoreCatalog?: boolean
})]