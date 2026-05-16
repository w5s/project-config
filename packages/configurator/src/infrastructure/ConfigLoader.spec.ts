import { beforeEach, describe, expect, it } from 'vitest';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { ConfigLoader } from './ConfigLoader.js';

describe('ConfigLoader', () => {
  const TEST_PATH = '.cache/configurator-config';

  beforeEach(async () => {
    await rm(TEST_PATH, { recursive: true, force: true });
    await mkdir(TEST_PATH, { recursive: true });
  });

  describe(ConfigLoader.load, () => {
    it('loads config from configurator.config.json', async () => {
      const configPath = nodePath.join(TEST_PATH, 'configurator.config.json');
      await writeFile(configPath, JSON.stringify({ preset: 'from-file' }, null, 2));

      const loaded = await ConfigLoader.load({ cwd: TEST_PATH });

      expect(loaded.config.preset).toBe('from-file');
      expect(loaded.configFile).toContain('configurator.config.json');
    });
  });
});
