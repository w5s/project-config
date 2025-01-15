import { describe, expect, it } from 'vitest';
import { ProjectScript } from './projectScript.js';

describe('ProjectScript', () => {
  it('is an enum', () => {
    expect(ProjectScript).toMatchInlineSnapshot(`
      {
        "Build": "build",
        "Clean": "clean",
        "CodeAnalysis": "code-analysis",
        "Coverage": "coverage",
        "Develop": "develop",
        "Docs": "docs",
        "Format": "format",
        "Install": "install",
        "Lint": "lint",
        "Prepare": "prepare",
        "Release": "release",
        "Rescue": "rescue",
        "Spellcheck": "spellcheck",
        "Test": "test",
        "Validate": "validate",
      }
    `);
  });
});
