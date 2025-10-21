const { json } = require('mrm-core');

/**
 * @param {{
 *   name: string,
 *   state: 'present'|'absent',
 * }} recommendation
 */
function vscodeRecommendedExtension(recommendation) {
  const packageFile = json('.vscode/extensions.json');
  if (recommendation.state === 'present') {
    packageFile.merge({
      recommendations: [recommendation.name],
    });
  } else {
    packageFile.set(
      'recommendations',
      packageFile.get('recommendations', []).filter((/** @type {string} */ _) => _ !== recommendation.name),
    );
  }
  packageFile.save();
}
exports.vscodeRecommendedExtension = vscodeRecommendedExtension;

/**
 * @param {{
 *   type: string,
 *   script: string;
 *   group: {
 *     kind: string,
 *     isDefault: boolean
 *   }
 * }} newTask
 */
function vscodeTask(newTask) {
  const vscodeTaskFile = json('.vscode/tasks.json', {
    tasks: [],
    version: '2.0.0',
  });
  /**
   * @type {Array<any>}
   */
  const tasks = vscodeTaskFile.get('tasks', []);
  if (tasks.some((task) => task.script === newTask.script)) {
    vscodeTaskFile.set(
      'tasks',
      tasks.map((task) => (task.script === newTask.script ? newTask : task)),
    );
  } else {
    vscodeTaskFile.set('tasks', [newTask, ...tasks]);
  }
  vscodeTaskFile.save();
}
exports.vscodeTask = vscodeTask;

/**
 * @param {{
 *   name: string,
 *   state: 'present'|'absent',
 *   snippets: {
 *     [key: string]: {
 *       scope: string,
 *       prefix: string,
 *       body: string|string[],
 *       description?: string,
 *     }
 *   }
 * }} snippets
 */
function vscodeSnippets({ name = 'mrm', state = 'present', snippets }) {
  const snippetFile = json(`.vscode/${name}.code-snippets`);
  if (state === 'present') {
    snippetFile.merge(snippets);
    snippetFile.save();
  } else {
    snippetFile.delete();
  }
}
exports.vscodeSnippets = vscodeSnippets;

/**
 * @param {{
 *   state: 'present'|'absent',
 *   update: (settings: Record<string, any>) => Record<string, any>
 * }} parameters
 */
function vscodeSettings({ state = 'present', update }) {
  const settingFile = json('.vscode/settings.json');
  if (state === 'present') {
    settingFile.set(update(settingFile.get() || {}));
    settingFile.save();
  } else {
    settingFile.delete();
  }
}
exports.vscodeSettings = vscodeSettings;
