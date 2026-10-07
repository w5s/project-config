import { interopDefault } from '@w5s/dev';

export interface WithSchemaOptions {
  /**
   * Enable the schema validation
   */
  enabled?: boolean;
}

export async function withSchema(
  options: boolean | undefined | WithSchemaOptions,
) {
  const enabled = typeof options === 'boolean' ? options : options?.enabled ?? true;

  const schemaValidatorPlugin = await interopDefault(import('eslint-plugin-json-schema-validator-2'));
  return {
    plugins: {
      schema: schemaValidatorPlugin,
    },
    rules: enabled ? { 'schema/no-invalid': 'error' as const } : {},
  };
}
