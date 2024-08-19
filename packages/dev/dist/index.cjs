'use strict';

var fs = require('fs');
var promises = require('fs/promises');

// src/directory.ts
async function exists(path) {
  try {
    await promises.access(path, promises.constants.F_OK);
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
      await promises.mkdir(path, { recursive: true });
    }
  } else if (isPresent) {
    await promises.rm(path, { recursive: true });
  }
}
function directorySync(options) {
  const { path, state } = options;
  const isPresent = fs.existsSync(path);
  if (state === "present") {
    if (!isPresent) {
      fs.mkdirSync(path, { recursive: true });
    }
  } else if (isPresent) {
    fs.rmSync(path, { recursive: true });
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
exports.ESLintConfig = void 0;
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
})(exports.ESLintConfig || (exports.ESLintConfig = {}));
async function exists2(path) {
  try {
    await promises.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
function existsSync2(path) {
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
async function file(options) {
  const { path, state, update, encoding = "utf8" } = options;
  if (state === "present") {
    const isPresent = await exists2(path);
    const previousContent = isPresent ? await promises.readFile(path, encoding) : "";
    const newContent = update == null ? "" : update(previousContent);
    if (newContent != null) {
      await promises.writeFile(path, newContent, encoding);
    }
  } else {
    await promises.rm(path, { force: true });
  }
}
function fileSync(options) {
  const { path, state, update, encoding = "utf8" } = options;
  if (state === "present") {
    const isPresent = existsSync2(path);
    const previousContent = isPresent ? fs.readFileSync(path, encoding) : "";
    const newContent = update == null ? "" : update(previousContent);
    if (newContent != null) {
      fs.writeFileSync(path, newContent, encoding);
    }
  } else {
    fs.rmSync(path, { force: true });
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
      exists: startIndex >= 0 && endIndex >= 0,
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

// src/json.ts
function toFileOption({ update, ...otherOptions }) {
  return {
    ...otherOptions,
    update: update == null ? update : (content) => {
      const jsonValue = content === "" ? void 0 : JSON.parse(content);
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

// src/project.ts
function escapeRegExp(value) {
  return value.replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}
exports.Project = void 0;
((Project2) => {
  function ecmaVersion() {
    return 2022;
  }
  Project2.ecmaVersion = ecmaVersion;
  const registry = {
    graphql: [".gql", ".graphql"],
    jpeg: [".jpg", ".jpeg"],
    javascript: [".js", ".cjs", ".mjs"],
    javascriptreact: [".jsx"],
    typescript: [".ts", ".cts", ".mts"],
    typescriptreact: [".tsx"],
    yaml: [".yaml", ".yml"]
  };
  function queryExtensions(languages) {
    return languages.reduce(
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      (previousValue, currentValue) => previousValue.concat(registry[currentValue] ?? []),
      []
    ).sort();
  }
  Project2.queryExtensions = queryExtensions;
  function sourceExtensions() {
    return queryExtensions(["javascript", "javascriptreact", "typescript", "typescriptreact"]);
  }
  Project2.sourceExtensions = sourceExtensions;
  const RESOURCE_EXTENSIONS = Object.freeze([
    ".css",
    ".sass",
    ".scss",
    ".less",
    ".gif",
    ".png",
    ".svg",
    ...queryExtensions(["graphql", "jpeg", "yaml"])
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
})(exports.Project || (exports.Project = {}));

// src/projectScript.ts
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

exports.ProjectScript = ProjectScript;
exports.block = block;
exports.blockSync = blockSync;
exports.directory = directory;
exports.directorySync = directorySync;
exports.file = file;
exports.fileSync = fileSync;
exports.json = json;
exports.jsonSync = jsonSync;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map