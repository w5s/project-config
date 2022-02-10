const { packageJson } = require('mrm-core');

function useWorkspaces() {
  return packageJson().get('mrmConfig.packageArchetype') === 'workspace';
}
exports.useWorkspaces = useWorkspaces;
