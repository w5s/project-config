import { existsSync, mkdirSync, rmSync, readFileSync, writeFileSync, constants as constants$1, accessSync } from 'node:fs';
import { mkdir, rm, readFile, writeFile, access, constants } from 'node:fs/promises';

// src/directory.ts
async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
async function directory(options) {
  const { path, state } = options;
  const isPresent = await exists(path);
  if (state === "present") {
    if (!isPresent) {
      await mkdir(path, { recursive: true });
    }
  } else if (isPresent) {
    await rm(path, { recursive: true });
  }
}
function directorySync(options) {
  const { path, state } = options;
  const isPresent = existsSync(path);
  if (state === "present") {
    if (!isPresent) {
      mkdirSync(path, { recursive: true });
    }
  } else if (isPresent) {
    rmSync(path, { recursive: true });
  }
}

// src/eslint.ts
function toArray(value) {
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}
function concatArray(left, right) {
  return toArray(left).concat(toArray(right));
}
var ESLintConfig;
((ESLintConfig2) => {
  function concat(...configs) {
    return configs.reduce(
      (returnValue, config) => ({
        ...returnValue,
        ...config,
        env: { ...returnValue.env, ...config.env },
        extends: concatArray(returnValue.extends, config.extends),
        globals: { ...returnValue.globals, ...config.globals },
        overrides: concatArray(returnValue.overrides, config.overrides),
        parserOptions: { ...returnValue.parserOptions, ...config.parserOptions },
        plugins: concatArray(returnValue.plugins, config.plugins),
        rules: { ...returnValue.rules, ...config.rules },
        settings: { ...returnValue.settings, ...config.settings }
      }),
      {
        env: {},
        extends: [],
        globals: {},
        overrides: [],
        parserOptions: {},
        plugins: [],
        rules: {},
        settings: {}
      }
    );
  }
  ESLintConfig2.concat = concat;
  function fixme(_status) {
    return "off";
  }
  ESLintConfig2.fixme = fixme;
})(ESLintConfig || (ESLintConfig = {}));
async function exists2(path) {
  try {
    await access(path, constants$1.F_OK);
    return true;
  } catch {
    return false;
  }
}
function existsSync2(path) {
  try {
    accessSync(path, constants$1.F_OK);
    return true;
  } catch {
    return false;
  }
}
async function file(options) {
  const { path, state, update, encoding = "utf8" } = options;
  if (state === "present") {
    const isPresent = await exists2(path);
    const previousContent = isPresent ? await readFile(path, encoding) : "";
    const newContent = update == null ? "" : update(previousContent);
    if (newContent != null) {
      await writeFile(path, newContent, encoding);
    }
  } else {
    await rm(path, { force: true });
  }
}
function fileSync(options) {
  const { path, state, update, encoding = "utf8" } = options;
  if (state === "present") {
    const isPresent = existsSync2(path);
    const previousContent = isPresent ? readFileSync(path, encoding) : "";
    const newContent = update == null ? "" : update(previousContent);
    if (newContent != null) {
      writeFileSync(path, newContent, encoding);
    }
  } else {
    rmSync(path, { force: true });
  }
}

// src/block.ts
var EOF = "EndOfFile";
var BOF = "BeginningOfFile";
var insertAt = (str, index, toInsert) => str.slice(0, index) + toInsert + str.slice(index);
var matchLast = (string, regexp) => {
  const matcher = new RegExp(regexp.source, `${regexp.flags}g`);
  let firstIndex = -1;
  let lastIndex = -1;
  let matches;
  while (true) {
    matches = matcher.exec(string);
    if (matches == null) {
      break;
    }
    firstIndex = matches.index;
    lastIndex = matcher.lastIndex;
  }
  return { firstIndex, lastIndex };
};
function toFileOptions(options) {
  const {
    marker = (mark) => `# ${mark.toUpperCase()} MANAGED BLOCK`,
    path,
    block: blockName,
    insertPosition = ["after", EOF],
    state = "present"
  } = options;
  const EOL = "\n";
  const beginBlock = marker("Begin");
  const endBlock = marker("End");
  function findBlock(content) {
    const startIndex = content.indexOf(beginBlock);
    const endIndex = content.indexOf(endBlock) + endBlock.length;
    return {
      endIndex,
      exists: startIndex !== -1 && endIndex >= 0,
      startIndex
    };
  }
  function apply(fullContent, blockContent) {
    const found = findBlock(fullContent);
    const remove = state === "absent";
    const replaceBlock = remove ? "" : beginBlock + EOL + blockContent + EOL + endBlock;
    const [positionDirection, positionAnchor] = insertPosition;
    if (found.exists) {
      return fullContent.slice(0, found.startIndex) + replaceBlock + fullContent.slice(found.endIndex);
    }
    if (remove) {
      return fullContent;
    }
    switch (positionDirection) {
      case "before": {
        if (positionAnchor !== BOF) {
          const { firstIndex } = matchLast(fullContent, positionAnchor);
          if (firstIndex >= 0) {
            return insertAt(fullContent, firstIndex, replaceBlock + EOL);
          }
        }
        return replaceBlock + EOL + fullContent;
      }
      case "after": {
        if (positionAnchor !== EOF) {
          const { lastIndex } = matchLast(fullContent, positionAnchor);
          if (lastIndex >= 0) {
            return insertAt(fullContent, lastIndex, EOL + replaceBlock);
          }
        }
        return fullContent + EOL + replaceBlock;
      }
      default: {
        throw new Error(`Unsupported position ${String(positionDirection)}`);
      }
    }
  }
  return {
    path,
    state: "present",
    update: (sourceContent) => apply(sourceContent, blockName)
  };
}
function block(options) {
  return file(toFileOptions(options));
}
function blockSync(options) {
  return fileSync(toFileOptions(options));
}

// src/interopDefault.ts
async function interopDefault(m) {
  const resolved = await m;
  return resolved.default ?? resolved;
}

// src/json.ts
function toFileOption({ update, ...otherOptions }) {
  return {
    ...otherOptions,
    update: update == null ? update : (content) => {
      const jsonValue = content === "" ? undefined : JSON.parse(content);
      return JSON.stringify(update(jsonValue));
    }
  };
}
async function json(options) {
  return file(toFileOption(options));
}
function jsonSync(options) {
  return fileSync(toFileOption(options));
}

// src/Project.ts
function escapeRegExp(value) {
  return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}
var Project;
((Project2) => {
  function ecmaVersion() {
    return 2022;
  }
  Project2.ecmaVersion = ecmaVersion;
  const registry = {
    css: [".css"],
    graphql: [".gql", ".graphql"],
    javascript: [".js", ".cjs", ".mjs"],
    javascriptreact: [".jsx"],
    jpeg: [".jpg", ".jpeg"],
    json: [".json"],
    jsonc: [".jsonc"],
    less: [".less"],
    markdown: [".markdown", ".mdown", ".mkd", ".md"],
    sass: [".sass"],
    scss: [".scss"],
    typescript: [".ts", ".cts", ".mts"],
    typescriptreact: [".tsx"],
    vue: [".vue"],
    yaml: [".yaml", ".yml"]
  };
  function queryExtensions(languages) {
    return languages.reduce((previousValue, currentValue) => previousValue.concat(registry[currentValue] ?? []), []).sort();
  }
  Project2.queryExtensions = queryExtensions;
  function sourceExtensions() {
    return queryExtensions(["javascript", "javascriptreact", "typescript", "typescriptreact"]);
  }
  Project2.sourceExtensions = sourceExtensions;
  const RESOURCE_EXTENSIONS = Object.freeze([
    ".gif",
    ".png",
    ".svg",
    ...queryExtensions(["css", "graphql", "jpeg", "less", "sass", "sass", "yaml"])
  ]);
  function resourceExtensions() {
    return RESOURCE_EXTENSIONS;
  }
  Project2.resourceExtensions = resourceExtensions;
  const IGNORED = Object.freeze([
    "node_modules/",
    "build/",
    "cjs/",
    "coverage/",
    "dist/",
    "dts/",
    "esm/",
    "lib/",
    "mjs/",
    "umd/"
  ]);
  function ignored() {
    return IGNORED;
  }
  Project2.ignored = ignored;
  function extensionsToMatcher(extensions) {
    return new RegExp(`(${extensions.map(escapeRegExp).join("|")})$`);
  }
  Project2.extensionsToMatcher = extensionsToMatcher;
  function extensionsToGlob(extensions) {
    return `*.+(${extensions.map((_) => _.replace(/^\./, "")).join("|")})`;
  }
  Project2.extensionsToGlob = extensionsToGlob;
})(Project || (Project = {}));

// src/ProjectScript.ts
var ProjectScript = {
  Build: "build",
  Clean: "clean",
  CodeAnalysis: "code-analysis",
  Coverage: "coverage",
  Develop: "develop",
  Docs: "docs",
  Format: "format",
  Install: "install",
  Lint: "lint",
  Prepare: "prepare",
  Release: "release",
  Rescue: "rescue",
  Spellcheck: "spellcheck",
  Test: "test",
  Validate: "validate"
};

export { ESLintConfig, Project, ProjectScript, block, blockSync, directory, directorySync, file, fileSync, interopDefault, json, jsonSync };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map