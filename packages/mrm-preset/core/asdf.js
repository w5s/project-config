const { file } = require('mrm-core');

/**
 * @typedef {{ [tool: string]: string }} ASDFConfig
 */
/**
 * @param {{
 *   state: 'present'|'absent',
 *   update?: (config: ASDFConfig) => ASDFConfig
 * }} options
 */
function asdfConfig({ state, update }) {
  const hasASDF = state === 'present';
  const toolVersionsFile = file('.tool-versions');

  if (hasASDF) {
    const eol = '\n';
    const content = toolVersionsFile.get();
    const parsed = Object.fromEntries(
      content
        .split(eol)
        .map((_) => _.split(/\s+/, 2))
        .filter((_) => _[0] !== ''),
    );

    // @ts-ignore
    const updated = update ? update(parsed) : parsed;

    const formatted = Object.keys(updated)
      .map((tool) => `${tool} ${updated[tool]}`)
      .join(eol);

    toolVersionsFile.save(formatted);
  } else {
    toolVersionsFile.delete();
  }
}

module.exports = {
  asdfConfig,
};
