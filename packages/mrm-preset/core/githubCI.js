const { yaml } = require('mrm-core');
const path = require('node:path');
const fs = require('node:fs');

const FILE_PATH = '.github/workflows';

function isSupported() {
  return fs.existsSync(FILE_PATH);
}
exports.isSupported = isSupported;

/**
 * @typedef { string | {
 *  group: string,
 *  'cancel-in-progress': boolean,
 * }} GithubWorkflowConcurrency
 */
// TODO: add strict typing
/**
 * @typedef {{
 *  name?: string,
 *  jobs?: Record<string, any>
 *  on?: any,
 *  env?: Record<string, string>,
 *  permissions?: any,
 *  defaults?: Record<string, any>,
 *  concurrency?: GithubWorkflowConcurrency,
 * }} GithubWorkflowConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent',
 *   name: string,
 *   update?: (config: GithubWorkflowConfig) => GithubWorkflowConfig
 * }} options
 */
function workflow({ name, state, update }) {
  const workflowFile = yaml(path.join(FILE_PATH, name));
  if (state === 'present') {
    /** @type {GithubWorkflowConfig} */
    let value = workflowFile.get() || {
      jobs: {},
    };
    if (update) {
      value = update(value);
      // @ts-ignore
      workflowFile.set(value);
    }

    workflowFile.save();
  } else {
    workflowFile.delete();
  }
}
exports.workflow = workflow;
