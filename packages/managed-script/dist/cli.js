#!/usr/bin/env node
import { n as meta, t as ManagedScript } from "./ManagedScript-CuIvyQ2n.js";
import { createRequire } from "node:module";
import tty from "tty";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/constants.mjs
var SpecialToken;
(function(SpecialToken) {
	SpecialToken["StartOfInput"] = "\0";
	SpecialToken["EndOfInput"] = "";
	SpecialToken["EndOfPartialInput"] = "";
})(SpecialToken || (SpecialToken = {}));
var NodeType;
(function(NodeType) {
	NodeType[NodeType["InitialNode"] = 0] = "InitialNode";
	NodeType[NodeType["SuccessNode"] = 1] = "SuccessNode";
	NodeType[NodeType["ErrorNode"] = 2] = "ErrorNode";
	NodeType[NodeType["CustomNode"] = 3] = "CustomNode";
})(NodeType || (NodeType = {}));
const HELP_REGEX = /^(-h|--help)(?:=([0-9]+))?$/;
const OPTION_REGEX = /^(--[a-z]+(?:-[a-z]+)*|-[a-zA-Z]+)$/;
const BATCH_REGEX = /^-[a-zA-Z]{2,}$/;
const BINDING_REGEX = /^([^=]+)=([\s\S]*)$/;
const IS_DEBUG = process.env.DEBUG_CLI === `1`;
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/errors.mjs
/**
* A generic usage error with the name `UsageError`.
*
* It should be used over `Error` only when it's the user's fault.
*/
var UsageError = class extends Error {
	constructor(message) {
		super(message);
		this.clipanion = { type: `usage` };
		this.name = `UsageError`;
	}
};
var UnknownSyntaxError = class extends Error {
	constructor(input, candidates) {
		super();
		this.input = input;
		this.candidates = candidates;
		this.clipanion = { type: `none` };
		this.name = `UnknownSyntaxError`;
		if (this.candidates.length === 0) this.message = `Command not found, but we're not sure what's the alternative.`;
		else if (this.candidates.every((candidate) => candidate.reason !== null && candidate.reason === candidates[0].reason)) {
			const [{ reason }] = this.candidates;
			this.message = `${reason}\n\n${this.candidates.map(({ usage }) => `$ ${usage}`).join(`\n`)}`;
		} else if (this.candidates.length === 1) {
			const [{ usage }] = this.candidates;
			this.message = `Command not found; did you mean:\n\n$ ${usage}\n${whileRunning(input)}`;
		} else this.message = `Command not found; did you mean one of:\n\n${this.candidates.map(({ usage }, index) => {
			return `${`${index}.`.padStart(4)} ${usage}`;
		}).join(`\n`)}\n\n${whileRunning(input)}`;
	}
};
var AmbiguousSyntaxError = class extends Error {
	constructor(input, usages) {
		super();
		this.input = input;
		this.usages = usages;
		this.clipanion = { type: `none` };
		this.name = `AmbiguousSyntaxError`;
		this.message = `Cannot find which to pick amongst the following alternatives:\n\n${this.usages.map((usage, index) => {
			return `${`${index}.`.padStart(4)} ${usage}`;
		}).join(`\n`)}\n\n${whileRunning(input)}`;
	}
};
const whileRunning = (input) => `While running ${input.filter((token) => {
	return token !== SpecialToken.EndOfInput && token !== SpecialToken.EndOfPartialInput;
}).map((token) => {
	const json = JSON.stringify(token);
	if (token.match(/\s/) || token.length === 0 || json !== `"${token}"`) return json;
	else return token;
}).join(` `)}`;
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/options/utils.mjs
const isOptionSymbol = Symbol(`clipanion/isOption`);
function makeCommandOption(spec) {
	return {
		...spec,
		[isOptionSymbol]: true
	};
}
function rerouteArguments(a, b) {
	if (typeof a === `undefined`) return [a, b];
	if (typeof a === `object` && a !== null && !Array.isArray(a)) return [void 0, a];
	else return [a, b];
}
function cleanValidationError(message, { mergeName = false } = {}) {
	const match = message.match(/^([^:]+): (.*)$/m);
	if (!match) return `validation failed`;
	let [, path, line] = match;
	if (mergeName) line = line[0].toLowerCase() + line.slice(1);
	line = path !== `.` || !mergeName ? `${path.replace(/^\.(\[|$)/, `$1`)}: ${line}` : `: ${line}`;
	return line;
}
function formatError(message, errors) {
	if (errors.length === 1) return new UsageError(`${message}${cleanValidationError(errors[0], { mergeName: true })}`);
	else return new UsageError(`${message}:\n${errors.map((error) => `\n- ${cleanValidationError(error)}`).join(``)}`);
}
function applyValidator(name, value, validator) {
	if (typeof validator === `undefined`) return value;
	const errors = [];
	const coercions = [];
	const coercion = (v) => {
		const orig = value;
		value = v;
		return coercion.bind(null, orig);
	};
	if (!validator(value, {
		errors,
		coercions,
		coercion
	})) throw formatError(`Invalid value for ${name}`, errors);
	for (const [, op] of coercions) op();
	return value;
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/Command.mjs
/**
* Base abstract class for CLI commands. The main thing to remember is to
* declare an async `execute` member function that will be called when the
* command is invoked from the CLI, and optionally a `paths` property to
* declare the set of paths under which the command should be exposed.
*/
var Command = class {
	constructor() {
		/**
		* Predefined that will be set to true if `-h,--help` has been used, in
		* which case `Command#execute` won't be called.
		*/
		this.help = false;
	}
	/**
	* Defines the usage information for the given command.
	*/
	static Usage(usage) {
		return usage;
	}
	/**
	* Standard error handler which will simply rethrow the error. Can be used
	* to add custom logic to handle errors from the command or simply return
	* the parent class error handling.
	*/
	async catch(error) {
		throw error;
	}
	async validateAndExecute() {
		const cascade = this.constructor.schema;
		if (Array.isArray(cascade)) {
			const { isDict, isUnknown, applyCascade } = await Promise.resolve().then(() => /* @__PURE__ */ __toESM(require_lib(), 1));
			const schema = applyCascade(isDict(isUnknown()), cascade);
			const errors = [];
			const coercions = [];
			if (!schema(this, {
				errors,
				coercions
			})) throw formatError(`Invalid option schema`, errors);
			for (const [, op] of coercions) op();
		} else if (cascade != null) throw new Error(`Invalid command schema`);
		const exitCode = await this.execute();
		if (typeof exitCode !== `undefined`) return exitCode;
		else return 0;
	}
};
/**
* Used to detect option definitions.
*/
Command.isOption = isOptionSymbol;
/**
* Just an helper to use along with the `paths` fields, to make it
* clearer that a command is the default one.
*
* @example
* class MyCommand extends Command {
*   static paths = [Command.Default];
* }
*/
Command.Default = [];
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/platform/node.mjs
function getDefaultColorDepth() {
	if (tty && `getColorDepth` in tty.WriteStream.prototype) return tty.WriteStream.prototype.getColorDepth();
	if (process.env.FORCE_COLOR === `0`) return 1;
	if (process.env.FORCE_COLOR === `1`) return 8;
	if (typeof process.stdout !== `undefined` && process.stdout.isTTY) return 8;
	return 1;
}
let gContextStorage;
function getCaptureActivator(context) {
	let contextStorage = gContextStorage;
	if (typeof contextStorage === `undefined`) {
		if (context.stdout === process.stdout && context.stderr === process.stderr) return null;
		const { AsyncLocalStorage: LazyAsyncLocalStorage } = __require("async_hooks");
		contextStorage = gContextStorage = new LazyAsyncLocalStorage();
		const origStdoutWrite = process.stdout._write;
		process.stdout._write = function(chunk, encoding, cb) {
			const context = contextStorage.getStore();
			if (typeof context === `undefined`) return origStdoutWrite.call(this, chunk, encoding, cb);
			return context.stdout.write(chunk, encoding, cb);
		};
		const origStderrWrite = process.stderr._write;
		process.stderr._write = function(chunk, encoding, cb) {
			const context = contextStorage.getStore();
			if (typeof context === `undefined`) return origStderrWrite.call(this, chunk, encoding, cb);
			return context.stderr.write(chunk, encoding, cb);
		};
	}
	return (fn) => {
		return contextStorage.run(context, fn);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/core.mjs
function debug(str) {
	if (IS_DEBUG) console.log(str);
}
const basicHelpState = {
	candidateUsage: null,
	requiredOptions: [],
	errorMessage: null,
	ignoreOptions: false,
	path: [],
	positionals: [],
	options: [],
	remainder: null,
	selectedIndex: -1,
	tokens: []
};
function makeStateMachine() {
	const stateMachine = { nodes: [] };
	for (let t = 0; t < NodeType.CustomNode; ++t) stateMachine.nodes.push(makeNode());
	return stateMachine;
}
function makeAnyOfMachine(inputs) {
	const output = makeStateMachine();
	const heads = [];
	let offset = output.nodes.length;
	for (const input of inputs) {
		heads.push(offset);
		for (let t = 0; t < input.nodes.length; ++t) if (!isTerminalNode(t)) output.nodes.push(cloneNode(input.nodes[t], offset));
		offset += input.nodes.length - NodeType.CustomNode + 1;
	}
	for (const head of heads) registerShortcut(output, NodeType.InitialNode, head);
	return output;
}
function injectNode(machine, node) {
	machine.nodes.push(node);
	return machine.nodes.length - 1;
}
function simplifyMachine(input) {
	const visited = /* @__PURE__ */ new Set();
	const process = (node) => {
		if (visited.has(node)) return;
		visited.add(node);
		const nodeDef = input.nodes[node];
		for (const transitions of Object.values(nodeDef.statics)) for (const { to } of transitions) process(to);
		for (const [, { to }] of nodeDef.dynamics) process(to);
		for (const { to } of nodeDef.shortcuts) process(to);
		const shortcuts = new Set(nodeDef.shortcuts.map(({ to }) => to));
		while (nodeDef.shortcuts.length > 0) {
			const { to } = nodeDef.shortcuts.shift();
			const toDef = input.nodes[to];
			for (const [segment, transitions] of Object.entries(toDef.statics)) {
				const store = !Object.prototype.hasOwnProperty.call(nodeDef.statics, segment) ? nodeDef.statics[segment] = [] : nodeDef.statics[segment];
				for (const transition of transitions) if (!store.some(({ to }) => transition.to === to)) store.push(transition);
			}
			for (const [test, transition] of toDef.dynamics) if (!nodeDef.dynamics.some(([otherTest, { to }]) => test === otherTest && transition.to === to)) nodeDef.dynamics.push([test, transition]);
			for (const transition of toDef.shortcuts) if (!shortcuts.has(transition.to)) {
				nodeDef.shortcuts.push(transition);
				shortcuts.add(transition.to);
			}
		}
	};
	process(NodeType.InitialNode);
}
function debugMachine(machine, { prefix = `` } = {}) {
	if (IS_DEBUG) {
		debug(`${prefix}Nodes are:`);
		for (let t = 0; t < machine.nodes.length; ++t) debug(`${prefix}  ${t}: ${JSON.stringify(machine.nodes[t])}`);
	}
}
function runMachineInternal(machine, input, partial = false) {
	debug(`Running a vm on ${JSON.stringify(input)}`);
	let branches = [{
		node: NodeType.InitialNode,
		state: {
			candidateUsage: null,
			requiredOptions: [],
			errorMessage: null,
			ignoreOptions: false,
			options: [],
			path: [],
			positionals: [],
			remainder: null,
			selectedIndex: null,
			tokens: []
		}
	}];
	debugMachine(machine, { prefix: `  ` });
	const tokens = [SpecialToken.StartOfInput, ...input];
	for (let t = 0; t < tokens.length; ++t) {
		const segment = tokens[t];
		const isEOI = segment === SpecialToken.EndOfInput || segment === SpecialToken.EndOfPartialInput;
		const segmentIndex = t - 1;
		debug(`  Processing ${JSON.stringify(segment)}`);
		const nextBranches = [];
		for (const { node, state } of branches) {
			debug(`    Current node is ${node}`);
			const nodeDef = machine.nodes[node];
			if (node === NodeType.ErrorNode) {
				nextBranches.push({
					node,
					state
				});
				continue;
			}
			console.assert(nodeDef.shortcuts.length === 0, `Shortcuts should have been eliminated by now`);
			const hasExactMatch = Object.prototype.hasOwnProperty.call(nodeDef.statics, segment);
			if (!partial || t < tokens.length - 1 || hasExactMatch) {
				if (hasExactMatch) {
					const transitions = nodeDef.statics[segment];
					for (const { to, reducer } of transitions) {
						nextBranches.push({
							node: to,
							state: typeof reducer !== `undefined` ? execute(reducers, reducer, state, segment, segmentIndex) : state
						});
						debug(`      Static transition to ${to} found`);
					}
				} else debug(`      No static transition found`);
			} else {
				let hasMatches = false;
				for (const candidate of Object.keys(nodeDef.statics)) {
					if (!candidate.startsWith(segment)) continue;
					if (segment === candidate) for (const { to, reducer } of nodeDef.statics[candidate]) {
						nextBranches.push({
							node: to,
							state: typeof reducer !== `undefined` ? execute(reducers, reducer, state, segment, segmentIndex) : state
						});
						debug(`      Static transition to ${to} found`);
					}
					else for (const { to } of nodeDef.statics[candidate]) {
						nextBranches.push({
							node: to,
							state: {
								...state,
								remainder: candidate.slice(segment.length)
							}
						});
						debug(`      Static transition to ${to} found (partial match)`);
					}
					hasMatches = true;
				}
				if (!hasMatches) debug(`      No partial static transition found`);
			}
			if (!isEOI) {
				for (const [test, { to, reducer }] of nodeDef.dynamics) if (execute(tests, test, state, segment, segmentIndex)) {
					nextBranches.push({
						node: to,
						state: typeof reducer !== `undefined` ? execute(reducers, reducer, state, segment, segmentIndex) : state
					});
					debug(`      Dynamic transition to ${to} found (via ${test})`);
				}
			}
		}
		if (nextBranches.length === 0 && isEOI && input.length === 1) return [{
			node: NodeType.InitialNode,
			state: basicHelpState
		}];
		if (nextBranches.length === 0) throw new UnknownSyntaxError(input, branches.filter(({ node }) => {
			return node !== NodeType.ErrorNode;
		}).map(({ state }) => {
			return {
				usage: state.candidateUsage,
				reason: null
			};
		}));
		if (nextBranches.every(({ node }) => node === NodeType.ErrorNode)) throw new UnknownSyntaxError(input, nextBranches.map(({ state }) => {
			return {
				usage: state.candidateUsage,
				reason: state.errorMessage
			};
		}));
		branches = trimSmallerBranches(nextBranches);
	}
	if (branches.length > 0) {
		debug(`  Results:`);
		for (const branch of branches) debug(`    - ${branch.node} -> ${JSON.stringify(branch.state)}`);
	} else debug(`  No results`);
	return branches;
}
function runMachine(machine, input, { endToken = SpecialToken.EndOfInput } = {}) {
	return selectBestState(input, runMachineInternal(machine, [...input, endToken]).map(({ state }) => {
		return state;
	}));
}
function trimSmallerBranches(branches) {
	let maxPathSize = 0;
	for (const { state } of branches) if (state.path.length > maxPathSize) maxPathSize = state.path.length;
	return branches.filter(({ state }) => {
		return state.path.length === maxPathSize;
	});
}
function selectBestState(input, states) {
	const terminalStates = states.filter((state) => {
		return state.selectedIndex !== null;
	});
	if (terminalStates.length === 0) throw new Error();
	const requiredOptionsSetStates = terminalStates.filter((state) => state.selectedIndex === -1 || state.requiredOptions.every((names) => names.some((name) => state.options.find((opt) => opt.name === name))));
	if (requiredOptionsSetStates.length === 0) throw new UnknownSyntaxError(input, terminalStates.map((state) => ({
		usage: state.candidateUsage,
		reason: null
	})));
	let maxPathSize = 0;
	for (const state of requiredOptionsSetStates) if (state.path.length > maxPathSize) maxPathSize = state.path.length;
	const bestPathBranches = requiredOptionsSetStates.filter((state) => {
		return state.path.length === maxPathSize;
	});
	const getPositionalCount = (state) => state.positionals.filter(({ extra }) => {
		return !extra;
	}).length + state.options.length;
	const statesWithPositionalCount = bestPathBranches.map((state) => {
		return {
			state,
			positionalCount: getPositionalCount(state)
		};
	});
	let maxPositionalCount = 0;
	for (const { positionalCount } of statesWithPositionalCount) if (positionalCount > maxPositionalCount) maxPositionalCount = positionalCount;
	const fixedStates = aggregateHelpStates(statesWithPositionalCount.filter(({ positionalCount }) => {
		return positionalCount === maxPositionalCount;
	}).map(({ state }) => {
		return state;
	}));
	if (fixedStates.length > 1) throw new AmbiguousSyntaxError(input, fixedStates.map((state) => state.candidateUsage));
	return fixedStates[0];
}
function aggregateHelpStates(states) {
	const notHelps = [];
	const helps = [];
	for (const state of states) if (state.selectedIndex === -1) helps.push(state);
	else notHelps.push(state);
	if (helps.length > 0) notHelps.push({
		...basicHelpState,
		path: findCommonPrefix(...helps.map((state) => state.path)),
		options: helps.reduce((options, state) => options.concat(state.options), [])
	});
	return notHelps;
}
function findCommonPrefix(firstPath, secondPath, ...rest) {
	if (secondPath === void 0) return Array.from(firstPath);
	return findCommonPrefix(firstPath.filter((segment, i) => segment === secondPath[i]), ...rest);
}
function makeNode() {
	return {
		dynamics: [],
		shortcuts: [],
		statics: {}
	};
}
function isTerminalNode(node) {
	return node === NodeType.SuccessNode || node === NodeType.ErrorNode;
}
function cloneTransition(input, offset = 0) {
	return {
		to: !isTerminalNode(input.to) ? input.to >= NodeType.CustomNode ? input.to + offset - NodeType.CustomNode + 1 : input.to + offset : input.to,
		reducer: input.reducer
	};
}
function cloneNode(input, offset = 0) {
	const output = makeNode();
	for (const [test, transition] of input.dynamics) output.dynamics.push([test, cloneTransition(transition, offset)]);
	for (const transition of input.shortcuts) output.shortcuts.push(cloneTransition(transition, offset));
	for (const [segment, transitions] of Object.entries(input.statics)) output.statics[segment] = transitions.map((transition) => cloneTransition(transition, offset));
	return output;
}
function registerDynamic(machine, from, test, to, reducer) {
	machine.nodes[from].dynamics.push([test, {
		to,
		reducer
	}]);
}
function registerShortcut(machine, from, to, reducer) {
	machine.nodes[from].shortcuts.push({
		to,
		reducer
	});
}
function registerStatic(machine, from, test, to, reducer) {
	(!Object.prototype.hasOwnProperty.call(machine.nodes[from].statics, test) ? machine.nodes[from].statics[test] = [] : machine.nodes[from].statics[test]).push({
		to,
		reducer
	});
}
function execute(store, callback, state, segment, segmentIndex) {
	if (Array.isArray(callback)) {
		const [name, ...args] = callback;
		return store[name](state, segment, segmentIndex, ...args);
	} else return store[callback](state, segment, segmentIndex);
}
const tests = {
	always: () => {
		return true;
	},
	isOptionLike: (state, segment) => {
		return !state.ignoreOptions && segment !== `-` && segment.startsWith(`-`);
	},
	isNotOptionLike: (state, segment) => {
		return state.ignoreOptions || segment === `-` || !segment.startsWith(`-`);
	},
	isOption: (state, segment, segmentIndex, name) => {
		return !state.ignoreOptions && segment === name;
	},
	isBatchOption: (state, segment, segmentIndex, names) => {
		return !state.ignoreOptions && BATCH_REGEX.test(segment) && [...segment.slice(1)].every((name) => names.has(`-${name}`));
	},
	isBoundOption: (state, segment, segmentIndex, names, options) => {
		const optionParsing = segment.match(BINDING_REGEX);
		return !state.ignoreOptions && !!optionParsing && OPTION_REGEX.test(optionParsing[1]) && names.has(optionParsing[1]) && options.filter((opt) => opt.nameSet.includes(optionParsing[1])).every((opt) => opt.allowBinding);
	},
	isNegatedOption: (state, segment, segmentIndex, name) => {
		return !state.ignoreOptions && segment === `--no-${name.slice(2)}`;
	},
	isHelp: (state, segment) => {
		return !state.ignoreOptions && HELP_REGEX.test(segment);
	},
	isUnsupportedOption: (state, segment, segmentIndex, names) => {
		return !state.ignoreOptions && segment.startsWith(`-`) && OPTION_REGEX.test(segment) && !names.has(segment);
	},
	isInvalidOption: (state, segment) => {
		return !state.ignoreOptions && segment.startsWith(`-`) && !OPTION_REGEX.test(segment);
	}
};
const reducers = {
	setCandidateState: (state, segment, segmentIndex, candidateState) => {
		return {
			...state,
			...candidateState
		};
	},
	setSelectedIndex: (state, segment, segmentIndex, index) => {
		return {
			...state,
			selectedIndex: index
		};
	},
	pushBatch: (state, segment, segmentIndex, names) => {
		const options = state.options.slice();
		const tokens = state.tokens.slice();
		for (let t = 1; t < segment.length; ++t) {
			const name = names.get(`-${segment[t]}`);
			const slice = t === 1 ? [0, 2] : [t, t + 1];
			options.push({
				name,
				value: true
			});
			tokens.push({
				segmentIndex,
				type: `option`,
				option: name,
				slice
			});
		}
		return {
			...state,
			options,
			tokens
		};
	},
	pushBound: (state, segment, segmentIndex) => {
		const [, name, value] = segment.match(BINDING_REGEX);
		const options = state.options.concat({
			name,
			value
		});
		const tokens = state.tokens.concat([
			{
				segmentIndex,
				type: `option`,
				slice: [0, name.length],
				option: name
			},
			{
				segmentIndex,
				type: `assign`,
				slice: [name.length, name.length + 1]
			},
			{
				segmentIndex,
				type: `value`,
				slice: [name.length + 1, name.length + value.length + 1]
			}
		]);
		return {
			...state,
			options,
			tokens
		};
	},
	pushPath: (state, segment, segmentIndex) => {
		const path = state.path.concat(segment);
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `path`
		});
		return {
			...state,
			path,
			tokens
		};
	},
	pushPositional: (state, segment, segmentIndex) => {
		const positionals = state.positionals.concat({
			value: segment,
			extra: false
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `positional`
		});
		return {
			...state,
			positionals,
			tokens
		};
	},
	pushExtra: (state, segment, segmentIndex) => {
		const positionals = state.positionals.concat({
			value: segment,
			extra: true
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `positional`
		});
		return {
			...state,
			positionals,
			tokens
		};
	},
	pushExtraNoLimits: (state, segment, segmentIndex) => {
		const positionals = state.positionals.concat({
			value: segment,
			extra: NoLimits
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `positional`
		});
		return {
			...state,
			positionals,
			tokens
		};
	},
	pushTrue: (state, segment, segmentIndex, name) => {
		const options = state.options.concat({
			name,
			value: true
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `option`,
			option: name
		});
		return {
			...state,
			options,
			tokens
		};
	},
	pushFalse: (state, segment, segmentIndex, name) => {
		const options = state.options.concat({
			name,
			value: false
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `option`,
			option: name
		});
		return {
			...state,
			options,
			tokens
		};
	},
	pushUndefined: (state, segment, segmentIndex, name) => {
		const options = state.options.concat({
			name: segment,
			value: void 0
		});
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `option`,
			option: segment
		});
		return {
			...state,
			options,
			tokens
		};
	},
	pushStringValue: (state, segment, segmentIndex) => {
		var _a;
		const lastOption = state.options[state.options.length - 1];
		const options = state.options.slice();
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `value`
		});
		lastOption.value = ((_a = lastOption.value) !== null && _a !== void 0 ? _a : []).concat([segment]);
		return {
			...state,
			options,
			tokens
		};
	},
	setStringValue: (state, segment, segmentIndex) => {
		const lastOption = state.options[state.options.length - 1];
		const options = state.options.slice();
		const tokens = state.tokens.concat({
			segmentIndex,
			type: `value`
		});
		lastOption.value = segment;
		return {
			...state,
			options,
			tokens
		};
	},
	inhibateOptions: (state) => {
		return {
			...state,
			ignoreOptions: true
		};
	},
	useHelp: (state, segment, segmentIndex, command) => {
		const [, , index] = segment.match(HELP_REGEX);
		if (typeof index !== `undefined`) return {
			...state,
			options: [{
				name: `-c`,
				value: String(command)
			}, {
				name: `-i`,
				value: index
			}]
		};
		else return {
			...state,
			options: [{
				name: `-c`,
				value: String(command)
			}]
		};
	},
	setError: (state, segment, segmentIndex, errorMessage) => {
		if (segment === SpecialToken.EndOfInput || segment === SpecialToken.EndOfPartialInput) return {
			...state,
			errorMessage: `${errorMessage}.`
		};
		else return {
			...state,
			errorMessage: `${errorMessage} ("${segment}").`
		};
	},
	setOptionArityError: (state, segment) => {
		const lastOption = state.options[state.options.length - 1];
		return {
			...state,
			errorMessage: `Not enough arguments to option ${lastOption.name}.`
		};
	}
};
const NoLimits = Symbol();
var CommandBuilder = class {
	constructor(cliIndex, cliOpts) {
		this.allOptionNames = /* @__PURE__ */ new Map();
		this.arity = {
			leading: [],
			trailing: [],
			extra: [],
			proxy: false
		};
		this.options = [];
		this.paths = [];
		this.cliIndex = cliIndex;
		this.cliOpts = cliOpts;
	}
	addPath(path) {
		this.paths.push(path);
	}
	setArity({ leading = this.arity.leading, trailing = this.arity.trailing, extra = this.arity.extra, proxy = this.arity.proxy }) {
		Object.assign(this.arity, {
			leading,
			trailing,
			extra,
			proxy
		});
	}
	addPositional({ name = `arg`, required = true } = {}) {
		if (!required && this.arity.extra === NoLimits) throw new Error(`Optional parameters cannot be declared when using .rest() or .proxy()`);
		if (!required && this.arity.trailing.length > 0) throw new Error(`Optional parameters cannot be declared after the required trailing positional arguments`);
		if (!required && this.arity.extra !== NoLimits) this.arity.extra.push(name);
		else if (this.arity.extra !== NoLimits && this.arity.extra.length === 0) this.arity.leading.push(name);
		else this.arity.trailing.push(name);
	}
	addRest({ name = `arg`, required = 0 } = {}) {
		if (this.arity.extra === NoLimits) throw new Error(`Infinite lists cannot be declared multiple times in the same command`);
		if (this.arity.trailing.length > 0) throw new Error(`Infinite lists cannot be declared after the required trailing positional arguments`);
		for (let t = 0; t < required; ++t) this.addPositional({ name });
		this.arity.extra = NoLimits;
	}
	addProxy({ required = 0 } = {}) {
		this.addRest({ required });
		this.arity.proxy = true;
	}
	addOption({ names: nameSet, description, arity = 0, hidden = false, required = false, allowBinding = true }) {
		if (!allowBinding && arity > 1) throw new Error(`The arity cannot be higher than 1 when the option only supports the --arg=value syntax`);
		if (!Number.isInteger(arity)) throw new Error(`The arity must be an integer, got ${arity}`);
		if (arity < 0) throw new Error(`The arity must be positive, got ${arity}`);
		const preferredName = nameSet.reduce((longestName, name) => {
			return name.length > longestName.length ? name : longestName;
		}, ``);
		for (const name of nameSet) this.allOptionNames.set(name, preferredName);
		this.options.push({
			preferredName,
			nameSet,
			description,
			arity,
			hidden,
			required,
			allowBinding
		});
	}
	setContext(context) {
		this.context = context;
	}
	usage({ detailed = true, inlineOptions = true } = {}) {
		const segments = [this.cliOpts.binaryName];
		const detailedOptionList = [];
		if (this.paths.length > 0) segments.push(...this.paths[0]);
		if (detailed) {
			for (const { preferredName, nameSet, arity, hidden, description, required } of this.options) {
				if (hidden) continue;
				const args = [];
				for (let t = 0; t < arity; ++t) args.push(` #${t}`);
				const definition = `${nameSet.join(`,`)}${args.join(``)}`;
				if (!inlineOptions && description) detailedOptionList.push({
					preferredName,
					nameSet,
					definition,
					description,
					required
				});
				else segments.push(required ? `<${definition}>` : `[${definition}]`);
			}
			segments.push(...this.arity.leading.map((name) => `<${name}>`));
			if (this.arity.extra === NoLimits) segments.push(`...`);
			else segments.push(...this.arity.extra.map((name) => `[${name}]`));
			segments.push(...this.arity.trailing.map((name) => `<${name}>`));
		}
		return {
			usage: segments.join(` `),
			options: detailedOptionList
		};
	}
	compile() {
		if (typeof this.context === `undefined`) throw new Error(`Assertion failed: No context attached`);
		const machine = makeStateMachine();
		let firstNode = NodeType.InitialNode;
		const candidateUsage = this.usage().usage;
		const requiredOptions = this.options.filter((opt) => opt.required).map((opt) => opt.nameSet);
		firstNode = injectNode(machine, makeNode());
		registerStatic(machine, NodeType.InitialNode, SpecialToken.StartOfInput, firstNode, [`setCandidateState`, {
			candidateUsage,
			requiredOptions
		}]);
		const positionalArgument = this.arity.proxy ? `always` : `isNotOptionLike`;
		const paths = this.paths.length > 0 ? this.paths : [[]];
		for (const path of paths) {
			let lastPathNode = firstNode;
			if (path.length > 0) {
				const optionPathNode = injectNode(machine, makeNode());
				registerShortcut(machine, lastPathNode, optionPathNode);
				this.registerOptions(machine, optionPathNode);
				lastPathNode = optionPathNode;
			}
			for (let t = 0; t < path.length; ++t) {
				const nextPathNode = injectNode(machine, makeNode());
				registerStatic(machine, lastPathNode, path[t], nextPathNode, `pushPath`);
				lastPathNode = nextPathNode;
				if (t + 1 < path.length) {
					const helpNode = injectNode(machine, makeNode());
					registerDynamic(machine, lastPathNode, `isHelp`, helpNode, [`useHelp`, this.cliIndex]);
					registerStatic(machine, helpNode, SpecialToken.EndOfInput, NodeType.SuccessNode, [`setSelectedIndex`, -1]);
				}
			}
			if (this.arity.leading.length > 0 || !this.arity.proxy) {
				const helpNode = injectNode(machine, makeNode());
				registerDynamic(machine, lastPathNode, `isHelp`, helpNode, [`useHelp`, this.cliIndex]);
				registerDynamic(machine, helpNode, `always`, helpNode, `pushExtra`);
				registerStatic(machine, helpNode, SpecialToken.EndOfInput, NodeType.SuccessNode, [`setSelectedIndex`, -1]);
				this.registerOptions(machine, lastPathNode);
			}
			if (this.arity.leading.length > 0) {
				registerStatic(machine, lastPathNode, SpecialToken.EndOfInput, NodeType.ErrorNode, [`setError`, `Not enough positional arguments`]);
				registerStatic(machine, lastPathNode, SpecialToken.EndOfPartialInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
			}
			let lastLeadingNode = lastPathNode;
			for (let t = 0; t < this.arity.leading.length; ++t) {
				const nextLeadingNode = injectNode(machine, makeNode());
				if (!this.arity.proxy || t + 1 !== this.arity.leading.length) this.registerOptions(machine, nextLeadingNode);
				if (this.arity.trailing.length > 0 || t + 1 !== this.arity.leading.length) {
					registerStatic(machine, nextLeadingNode, SpecialToken.EndOfInput, NodeType.ErrorNode, [`setError`, `Not enough positional arguments`]);
					registerStatic(machine, nextLeadingNode, SpecialToken.EndOfPartialInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
				}
				registerDynamic(machine, lastLeadingNode, `isNotOptionLike`, nextLeadingNode, `pushPositional`);
				lastLeadingNode = nextLeadingNode;
			}
			let lastExtraNode = lastLeadingNode;
			if (this.arity.extra === NoLimits || this.arity.extra.length > 0) {
				const extraShortcutNode = injectNode(machine, makeNode());
				registerShortcut(machine, lastLeadingNode, extraShortcutNode);
				if (this.arity.extra === NoLimits) {
					const extraNode = injectNode(machine, makeNode());
					if (!this.arity.proxy) this.registerOptions(machine, extraNode);
					registerDynamic(machine, lastLeadingNode, positionalArgument, extraNode, `pushExtraNoLimits`);
					registerDynamic(machine, extraNode, positionalArgument, extraNode, `pushExtraNoLimits`);
					registerShortcut(machine, extraNode, extraShortcutNode);
				} else for (let t = 0; t < this.arity.extra.length; ++t) {
					const nextExtraNode = injectNode(machine, makeNode());
					if (!this.arity.proxy || t > 0) this.registerOptions(machine, nextExtraNode);
					registerDynamic(machine, lastExtraNode, positionalArgument, nextExtraNode, `pushExtra`);
					registerShortcut(machine, nextExtraNode, extraShortcutNode);
					lastExtraNode = nextExtraNode;
				}
				lastExtraNode = extraShortcutNode;
			}
			if (this.arity.trailing.length > 0) {
				registerStatic(machine, lastExtraNode, SpecialToken.EndOfInput, NodeType.ErrorNode, [`setError`, `Not enough positional arguments`]);
				registerStatic(machine, lastExtraNode, SpecialToken.EndOfPartialInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
			}
			let lastTrailingNode = lastExtraNode;
			for (let t = 0; t < this.arity.trailing.length; ++t) {
				const nextTrailingNode = injectNode(machine, makeNode());
				if (!this.arity.proxy) this.registerOptions(machine, nextTrailingNode);
				if (t + 1 < this.arity.trailing.length) {
					registerStatic(machine, nextTrailingNode, SpecialToken.EndOfInput, NodeType.ErrorNode, [`setError`, `Not enough positional arguments`]);
					registerStatic(machine, nextTrailingNode, SpecialToken.EndOfPartialInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
				}
				registerDynamic(machine, lastTrailingNode, `isNotOptionLike`, nextTrailingNode, `pushPositional`);
				lastTrailingNode = nextTrailingNode;
			}
			registerDynamic(machine, lastTrailingNode, positionalArgument, NodeType.ErrorNode, [`setError`, `Extraneous positional argument`]);
			registerStatic(machine, lastTrailingNode, SpecialToken.EndOfInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
			registerStatic(machine, lastTrailingNode, SpecialToken.EndOfPartialInput, NodeType.SuccessNode, [`setSelectedIndex`, this.cliIndex]);
		}
		return {
			machine,
			context: this.context
		};
	}
	registerOptions(machine, node) {
		registerDynamic(machine, node, [`isOption`, `--`], node, `inhibateOptions`);
		registerDynamic(machine, node, [`isBatchOption`, this.allOptionNames], node, [`pushBatch`, this.allOptionNames]);
		registerDynamic(machine, node, [
			`isBoundOption`,
			this.allOptionNames,
			this.options
		], node, `pushBound`);
		registerDynamic(machine, node, [`isUnsupportedOption`, this.allOptionNames], NodeType.ErrorNode, [`setError`, `Unsupported option name`]);
		registerDynamic(machine, node, [`isInvalidOption`], NodeType.ErrorNode, [`setError`, `Invalid option name`]);
		for (const option of this.options) if (option.arity === 0) for (const name of option.nameSet) {
			registerDynamic(machine, node, [`isOption`, name], node, [`pushTrue`, option.preferredName]);
			if (name.startsWith(`--`) && !name.startsWith(`--no-`)) registerDynamic(machine, node, [`isNegatedOption`, name], node, [`pushFalse`, option.preferredName]);
		}
		else {
			let lastNode = injectNode(machine, makeNode());
			for (const name of option.nameSet) registerDynamic(machine, node, [`isOption`, name], lastNode, [`pushUndefined`, option.preferredName]);
			for (let t = 0; t < option.arity; ++t) {
				const nextNode = injectNode(machine, makeNode());
				registerStatic(machine, lastNode, SpecialToken.EndOfInput, NodeType.ErrorNode, `setOptionArityError`);
				registerStatic(machine, lastNode, SpecialToken.EndOfPartialInput, NodeType.ErrorNode, `setOptionArityError`);
				registerDynamic(machine, lastNode, `isOptionLike`, NodeType.ErrorNode, `setOptionArityError`);
				const action = option.arity === 1 ? `setStringValue` : `pushStringValue`;
				registerDynamic(machine, lastNode, `isNotOptionLike`, nextNode, action);
				lastNode = nextNode;
			}
			registerShortcut(machine, lastNode, node);
		}
	}
};
var CliBuilder = class CliBuilder {
	static build(cbs, opts = {}) {
		return new CliBuilder(opts).commands(cbs).compile();
	}
	constructor({ binaryName = `...` } = {}) {
		this.builders = [];
		this.opts = { binaryName };
	}
	getBuilderByIndex(n) {
		if (!(n >= 0 && n < this.builders.length)) throw new Error(`Assertion failed: Out-of-bound command index (${n})`);
		return this.builders[n];
	}
	commands(cbs) {
		for (const cb of cbs) cb(this.command());
		return this;
	}
	command() {
		const builder = new CommandBuilder(this.builders.length, this.opts);
		this.builders.push(builder);
		return builder;
	}
	compile() {
		const machines = [];
		const contexts = [];
		for (const builder of this.builders) {
			const { machine, context } = builder.compile();
			machines.push(machine);
			contexts.push(context);
		}
		const machine = makeAnyOfMachine(machines);
		simplifyMachine(machine);
		return {
			machine,
			contexts,
			process: (input, { partial } = {}) => {
				const endToken = partial ? SpecialToken.EndOfPartialInput : SpecialToken.EndOfInput;
				return runMachine(machine, input, { endToken });
			}
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/format.mjs
const richLine = Array(80).fill(`━`);
for (let t = 0; t <= 24; ++t) richLine[richLine.length - t] = `\x1b[38;5;${232 + t}m━`;
const richFormat = {
	header: (str) => `\x1b[1m━━━ ${str}${str.length < 75 ? ` ${richLine.slice(str.length + 5).join(``)}` : `:`}\x1b[0m`,
	bold: (str) => `\x1b[1m${str}\x1b[22m`,
	error: (str) => `\x1b[31m\x1b[1m${str}\x1b[22m\x1b[39m`,
	code: (str) => `\x1b[36m${str}\x1b[39m`
};
const textFormat = {
	header: (str) => str,
	bold: (str) => str,
	error: (str) => str,
	code: (str) => str
};
function dedent(text) {
	const lines = text.split(`\n`);
	const nonEmptyLines = lines.filter((line) => line.match(/\S/));
	const indent = nonEmptyLines.length > 0 ? nonEmptyLines.reduce((minLength, line) => Math.min(minLength, line.length - line.trimStart().length), Number.MAX_VALUE) : 0;
	return lines.map((line) => line.slice(indent).trimRight()).join(`\n`);
}
/**
* Formats markdown text to be displayed to the console. Not all markdown features are supported.
*
* @param text The markdown text to format.
* @param opts.format The format to use.
* @param opts.paragraphs Whether to cut the text into paragraphs of 80 characters at most.
*/
function formatMarkdownish(text, { format, paragraphs }) {
	text = text.replace(/\r\n?/g, `\n`);
	text = dedent(text);
	text = text.replace(/^\n+|\n+$/g, ``);
	text = text.replace(/^(\s*)-([^\n]*?)\n+/gm, `$1-$2\n\n`);
	text = text.replace(/\n(\n)?\n*/g, ($0, $1) => $1 ? $1 : ` `);
	if (paragraphs) text = text.split(/\n/).map((paragraph) => {
		const bulletMatch = paragraph.match(/^\s*[*-][\t ]+(.*)/);
		if (!bulletMatch) return paragraph.match(/(.{1,80})(?: |$)/g).join(`\n`);
		const indent = paragraph.length - paragraph.trimStart().length;
		return bulletMatch[1].match(new RegExp(`(.{1,${78 - indent}})(?: |$)`, `g`)).map((line, index) => {
			return ` `.repeat(indent) + (index === 0 ? `- ` : `  `) + line;
		}).join(`\n`);
	}).join(`\n\n`);
	text = text.replace(/(`+)((?:.|[\n])*?)\1/g, ($0, $1, $2) => {
		return format.code($1 + $2 + $1);
	});
	text = text.replace(/(\*\*)((?:.|[\n])*?)\1/g, ($0, $1, $2) => {
		return format.bold($1 + $2 + $1);
	});
	return text ? `${text}\n` : ``;
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/HelpCommand.mjs
var HelpCommand$1 = class HelpCommand$1 extends Command {
	static from(state, contexts) {
		const command = new HelpCommand$1(contexts);
		command.path = state.path;
		for (const opt of state.options) switch (opt.name) {
			case `-c`:
				command.commands.push(Number(opt.value));
				break;
			case `-i`: command.index = Number(opt.value);
		}
		return command;
	}
	constructor(contexts) {
		super();
		this.contexts = contexts;
		this.commands = [];
	}
	async execute() {
		let commands = this.commands;
		if (typeof this.index !== `undefined` && this.index >= 0 && this.index < commands.length) commands = [commands[this.index]];
		if (commands.length === 0) this.context.stdout.write(this.cli.usage());
		else if (commands.length === 1) this.context.stdout.write(this.cli.usage(this.contexts[commands[0]].commandClass, { detailed: true }));
		else if (commands.length > 1) {
			this.context.stdout.write(`Multiple commands match your selection:\n`);
			this.context.stdout.write(`\n`);
			let index = 0;
			for (const command of this.commands) this.context.stdout.write(this.cli.usage(this.contexts[command].commandClass, { prefix: `${index++}. `.padStart(5) }));
			this.context.stdout.write(`\n`);
			this.context.stdout.write(`Run again with -h=<index> to see the longer details of any of those commands.\n`);
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/Cli.mjs
const errorCommandSymbol = Symbol(`clipanion/errorCommand`);
/**
* @template Context The context shared by all commands. Contexts are a set of values, defined when calling the `run`/`runExit` functions from the CLI instance, that will be made available to the commands via `this.context`.
*/
var Cli = class Cli {
	/**
	* Creates a new Cli and registers all commands passed as parameters.
	*
	* @param commandClasses The Commands to register
	* @returns The created `Cli` instance
	*/
	static from(commandClasses, options = {}) {
		const cli = new Cli(options);
		const resolvedCommandClasses = Array.isArray(commandClasses) ? commandClasses : [commandClasses];
		for (const commandClass of resolvedCommandClasses) cli.register(commandClass);
		return cli;
	}
	constructor({ binaryLabel, binaryName: binaryNameOpt = `...`, binaryVersion, enableCapture = false, enableColors } = {}) {
		this.registrations = /* @__PURE__ */ new Map();
		this.builder = new CliBuilder({ binaryName: binaryNameOpt });
		this.binaryLabel = binaryLabel;
		this.binaryName = binaryNameOpt;
		this.binaryVersion = binaryVersion;
		this.enableCapture = enableCapture;
		this.enableColors = enableColors;
	}
	/**
	* Registers a command inside the CLI.
	*/
	register(commandClass) {
		var _a;
		if (this.registrations.has(commandClass)) throw new RangeError(`${commandClass.name} has already been registered`);
		const specs = /* @__PURE__ */ new Map();
		const command = new commandClass();
		for (const key in command) {
			const value = command[key];
			if (typeof value === `object` && value !== null && value[Command.isOption]) specs.set(key, value);
		}
		const builder = this.builder.command();
		const index = builder.cliIndex;
		const paths = (_a = commandClass.paths) !== null && _a !== void 0 ? _a : command.paths;
		if (typeof paths !== `undefined`) for (const path of paths) builder.addPath(path);
		this.registrations.set(commandClass, {
			specs,
			builder,
			index
		});
		for (const [key, { definition }] of specs.entries()) definition(builder, key);
		builder.setContext({ commandClass });
	}
	process(opts, contextArg) {
		const { input, context: userContext, partial } = typeof opts === `object` && Array.isArray(opts) ? {
			input: opts,
			context: contextArg
		} : opts;
		const { contexts, process } = this.builder.compile();
		const state = process(input, { partial });
		const context = {
			...Cli.defaultContext,
			...userContext
		};
		switch (state.selectedIndex) {
			case -1: {
				const command = HelpCommand$1.from(state, contexts);
				command.context = context;
				command.tokens = state.tokens;
				return command;
			}
			default: {
				const { commandClass } = contexts[state.selectedIndex];
				const record = this.registrations.get(commandClass);
				if (typeof record === `undefined`) throw new Error(`Assertion failed: Expected the command class to have been registered.`);
				const command = new commandClass();
				command.context = context;
				command.tokens = state.tokens;
				command.path = state.path;
				try {
					for (const [key, { transformer }] of record.specs.entries()) command[key] = transformer(record.builder, key, state, context);
					return command;
				} catch (error) {
					error[errorCommandSymbol] = command;
					throw error;
				}
			}
		}
	}
	async run(input, userContext) {
		var _a, _b;
		let command;
		const context = {
			...Cli.defaultContext,
			...userContext
		};
		const colored = (_a = this.enableColors) !== null && _a !== void 0 ? _a : context.colorDepth > 1;
		if (!Array.isArray(input)) command = input;
		else try {
			command = this.process(input, context);
		} catch (error) {
			context.stdout.write(this.error(error, { colored }));
			return 1;
		}
		if (command.help) {
			context.stdout.write(this.usage(command, {
				colored,
				detailed: true
			}));
			return 0;
		}
		command.context = context;
		command.cli = {
			binaryLabel: this.binaryLabel,
			binaryName: this.binaryName,
			binaryVersion: this.binaryVersion,
			enableCapture: this.enableCapture,
			enableColors: this.enableColors,
			definitions: () => this.definitions(),
			definition: (command) => this.definition(command),
			error: (error, opts) => this.error(error, opts),
			format: (colored) => this.format(colored),
			process: (input, subContext) => this.process(input, {
				...context,
				...subContext
			}),
			run: (input, subContext) => this.run(input, {
				...context,
				...subContext
			}),
			usage: (command, opts) => this.usage(command, opts)
		};
		const activate = this.enableCapture ? (_b = getCaptureActivator(context)) !== null && _b !== void 0 ? _b : noopCaptureActivator : noopCaptureActivator;
		let exitCode;
		try {
			exitCode = await activate(() => command.validateAndExecute().catch((error) => command.catch(error).then(() => 0)));
		} catch (error) {
			context.stdout.write(this.error(error, {
				colored,
				command
			}));
			return 1;
		}
		return exitCode;
	}
	async runExit(input, context) {
		process.exitCode = await this.run(input, context);
	}
	definition(commandClass, { colored = false } = {}) {
		if (!commandClass.usage) return null;
		const { usage: path } = this.getUsageByRegistration(commandClass, { detailed: false });
		const { usage, options } = this.getUsageByRegistration(commandClass, {
			detailed: true,
			inlineOptions: false
		});
		return {
			path,
			usage,
			category: typeof commandClass.usage.category !== `undefined` ? formatMarkdownish(commandClass.usage.category, {
				format: this.format(colored),
				paragraphs: false
			}) : void 0,
			description: typeof commandClass.usage.description !== `undefined` ? formatMarkdownish(commandClass.usage.description, {
				format: this.format(colored),
				paragraphs: false
			}) : void 0,
			details: typeof commandClass.usage.details !== `undefined` ? formatMarkdownish(commandClass.usage.details, {
				format: this.format(colored),
				paragraphs: true
			}) : void 0,
			examples: typeof commandClass.usage.examples !== `undefined` ? commandClass.usage.examples.map(([label, cli]) => [formatMarkdownish(label, {
				format: this.format(colored),
				paragraphs: false
			}), cli.replace(/\$0/g, this.binaryName)]) : void 0,
			options
		};
	}
	definitions({ colored = false } = {}) {
		const data = [];
		for (const commandClass of this.registrations.keys()) {
			const usage = this.definition(commandClass, { colored });
			if (!usage) continue;
			data.push(usage);
		}
		return data;
	}
	usage(command = null, { colored, detailed = false, prefix = `$ ` } = {}) {
		var _a;
		if (command === null) {
			for (const commandClass of this.registrations.keys()) {
				const paths = commandClass.paths;
				const isDocumented = typeof commandClass.usage !== `undefined`;
				if (!paths || paths.length === 0 || paths.length === 1 && paths[0].length === 0 || ((_a = paths === null || paths === void 0 ? void 0 : paths.some((path) => path.length === 0)) !== null && _a !== void 0 ? _a : false)) {
					if (command) {
						command = null;
						break;
					} else command = commandClass;
				} else if (isDocumented) {
					command = null;
					continue;
				}
			}
			if (command) detailed = true;
		}
		const commandClass = command !== null && command instanceof Command ? command.constructor : command;
		let result = ``;
		if (!commandClass) {
			const commandsByCategories = /* @__PURE__ */ new Map();
			for (const [commandClass, { index }] of this.registrations.entries()) {
				if (typeof commandClass.usage === `undefined`) continue;
				const category = typeof commandClass.usage.category !== `undefined` ? formatMarkdownish(commandClass.usage.category, {
					format: this.format(colored),
					paragraphs: false
				}) : null;
				let categoryCommands = commandsByCategories.get(category);
				if (typeof categoryCommands === `undefined`) commandsByCategories.set(category, categoryCommands = []);
				const { usage } = this.getUsageByIndex(index);
				categoryCommands.push({
					commandClass,
					usage
				});
			}
			const categoryNames = Array.from(commandsByCategories.keys()).sort((a, b) => {
				if (a === null) return -1;
				if (b === null) return 1;
				return a.localeCompare(b, `en`, {
					usage: `sort`,
					caseFirst: `upper`
				});
			});
			const hasLabel = typeof this.binaryLabel !== `undefined`;
			const hasVersion = typeof this.binaryVersion !== `undefined`;
			if (hasLabel || hasVersion) {
				if (hasLabel && hasVersion) result += `${this.format(colored).header(`${this.binaryLabel} - ${this.binaryVersion}`)}\n\n`;
				else if (hasLabel) result += `${this.format(colored).header(`${this.binaryLabel}`)}\n`;
				else result += `${this.format(colored).header(`${this.binaryVersion}`)}\n`;
				result += `  ${this.format(colored).bold(prefix)}${this.binaryName} <command>\n`;
			} else result += `${this.format(colored).bold(prefix)}${this.binaryName} <command>\n`;
			for (const categoryName of categoryNames) {
				const commands = commandsByCategories.get(categoryName).slice().sort((a, b) => {
					return a.usage.localeCompare(b.usage, `en`, {
						usage: `sort`,
						caseFirst: `upper`
					});
				});
				const header = categoryName !== null ? categoryName.trim() : `General commands`;
				result += `\n`;
				result += `${this.format(colored).header(`${header}`)}\n`;
				for (const { commandClass, usage } of commands) {
					const doc = commandClass.usage.description || `undocumented`;
					result += `\n`;
					result += `  ${this.format(colored).bold(usage)}\n`;
					result += `    ${formatMarkdownish(doc, {
						format: this.format(colored),
						paragraphs: false
					})}`;
				}
			}
			result += `\n`;
			result += formatMarkdownish(`You can also print more details about any of these commands by calling them with the \`-h,--help\` flag right after the command name.`, {
				format: this.format(colored),
				paragraphs: true
			});
		} else if (!detailed) {
			const { usage } = this.getUsageByRegistration(commandClass);
			result += `${this.format(colored).bold(prefix)}${usage}\n`;
		} else {
			const { description = ``, details = ``, examples = [] } = commandClass.usage || {};
			if (description !== ``) {
				result += formatMarkdownish(description, {
					format: this.format(colored),
					paragraphs: false
				}).replace(/^./, ($0) => $0.toUpperCase());
				result += `\n`;
			}
			if (details !== `` || examples.length > 0) {
				result += `${this.format(colored).header(`Usage`)}\n`;
				result += `\n`;
			}
			const { usage, options } = this.getUsageByRegistration(commandClass, { inlineOptions: false });
			result += `${this.format(colored).bold(prefix)}${usage}\n`;
			if (options.length > 0) {
				result += `\n`;
				result += `${this.format(colored).header(`Options`)}\n`;
				const maxDefinitionLength = options.reduce((length, option) => {
					return Math.max(length, option.definition.length);
				}, 0);
				result += `\n`;
				for (const { definition, description } of options) result += `  ${this.format(colored).bold(definition.padEnd(maxDefinitionLength))}    ${formatMarkdownish(description, {
					format: this.format(colored),
					paragraphs: false
				})}`;
			}
			if (details !== ``) {
				result += `\n`;
				result += `${this.format(colored).header(`Details`)}\n`;
				result += `\n`;
				result += formatMarkdownish(details, {
					format: this.format(colored),
					paragraphs: true
				});
			}
			if (examples.length > 0) {
				result += `\n`;
				result += `${this.format(colored).header(`Examples`)}\n`;
				for (const [description, example] of examples) {
					result += `\n`;
					result += formatMarkdownish(description, {
						format: this.format(colored),
						paragraphs: false
					});
					result += `${example.replace(/^/m, `  ${this.format(colored).bold(prefix)}`).replace(/\$0/g, this.binaryName)}\n`;
				}
			}
		}
		return result;
	}
	error(error, _a) {
		var _b;
		var { colored, command = (_b = error[errorCommandSymbol]) !== null && _b !== void 0 ? _b : null } = _a === void 0 ? {} : _a;
		if (!error || typeof error !== `object` || !(`stack` in error)) error = /* @__PURE__ */ new Error(`Execution failed with a non-error rejection (rejected value: ${JSON.stringify(error)})`);
		let result = ``;
		let name = error.name.replace(/([a-z])([A-Z])/g, `$1 $2`);
		if (name === `Error`) name = `Internal Error`;
		result += `${this.format(colored).error(name)}: ${error.message}\n`;
		const meta = error.clipanion;
		if (typeof meta !== `undefined`) {
			if (meta.type === `usage`) {
				result += `\n`;
				result += this.usage(command);
			}
		} else if (error.stack) result += `${error.stack.replace(/^.*\n/, ``)}\n`;
		return result;
	}
	format(colored) {
		var _a;
		return ((_a = colored !== null && colored !== void 0 ? colored : this.enableColors) !== null && _a !== void 0 ? _a : Cli.defaultContext.colorDepth > 1) ? richFormat : textFormat;
	}
	getUsageByRegistration(klass, opts) {
		const record = this.registrations.get(klass);
		if (typeof record === `undefined`) throw new Error(`Assertion failed: Unregistered command`);
		return this.getUsageByIndex(record.index, opts);
	}
	getUsageByIndex(n, opts) {
		return this.builder.getBuilderByIndex(n).usage(opts);
	}
};
/**
* The default context of the CLI.
*
* Contains the stdio of the current `process`.
*/
Cli.defaultContext = {
	env: process.env,
	stdin: process.stdin,
	stdout: process.stdout,
	stderr: process.stderr,
	colorDepth: getDefaultColorDepth()
};
function noopCaptureActivator(fn) {
	return fn();
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/builtins/help.mjs
/**
* A command that prints the usage of all commands.
*
* Paths: `-h`, `--help`
*/
var HelpCommand = class extends Command {
	async execute() {
		this.context.stdout.write(this.cli.usage());
	}
};
HelpCommand.paths = [[`-h`], [`--help`]];
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/builtins/version.mjs
/**
* A command that prints the version of the binary (`cli.binaryVersion`).
*
* Paths: `-v`, `--version`
*/
var VersionCommand = class extends Command {
	async execute() {
		var _a;
		this.context.stdout.write(`${(_a = this.cli.binaryVersion) !== null && _a !== void 0 ? _a : `<unknown>`}\n`);
	}
};
VersionCommand.paths = [[`-v`], [`--version`]];
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/options/Boolean.mjs
function Boolean(descriptor, initialValueBase, optsBase) {
	const [initialValue, opts] = rerouteArguments(initialValueBase, optsBase !== null && optsBase !== void 0 ? optsBase : {});
	const optNames = descriptor.split(`,`);
	const nameSet = new Set(optNames);
	return makeCommandOption({
		definition(builder) {
			builder.addOption({
				names: optNames,
				allowBinding: false,
				arity: 0,
				hidden: opts.hidden,
				description: opts.description,
				required: opts.required
			});
		},
		transformer(builer, key, state) {
			let currentValue = initialValue;
			for (const { name, value } of state.options) {
				if (!nameSet.has(name)) continue;
				currentValue = value;
			}
			return currentValue;
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/options/Rest.mjs
/**
* Used to annotate that the command supports any number of positional
* arguments.
*
* Be careful: this function is order-dependent! Make sure to define it
* after any positional argument you want to declare.
*
* This function is mutually exclusive with Option.Proxy.
*
* @example
* yarn add hello world
*     ► rest = ["hello", "world"]
*/
function Rest(opts = {}) {
	return makeCommandOption({
		definition(builder, key) {
			var _a;
			builder.addRest({
				name: (_a = opts.name) !== null && _a !== void 0 ? _a : key,
				required: opts.required
			});
		},
		transformer(builder, key, state) {
			const isRestPositional = (index) => {
				const positional = state.positionals[index];
				if (positional.extra === NoLimits) return true;
				if (positional.extra === false && index < builder.arity.leading.length) return true;
				return false;
			};
			let count = 0;
			while (count < state.positionals.length && isRestPositional(count)) count += 1;
			return state.positionals.splice(0, count).map(({ value }) => value);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/clipanion@4.0.0-rc.4_typanion@3.14.0/node_modules/clipanion/lib/advanced/options/String.mjs
function StringOption(descriptor, initialValueBase, optsBase) {
	const [initialValue, opts] = rerouteArguments(initialValueBase, optsBase !== null && optsBase !== void 0 ? optsBase : {});
	const { arity = 1 } = opts;
	const optNames = descriptor.split(`,`);
	const nameSet = new Set(optNames);
	return makeCommandOption({
		definition(builder) {
			builder.addOption({
				names: optNames,
				arity: opts.tolerateBoolean ? 0 : arity,
				hidden: opts.hidden,
				description: opts.description,
				required: opts.required
			});
		},
		transformer(builder, key, state, context) {
			let usedName;
			let currentValue = initialValue;
			if (typeof opts.env !== `undefined` && context.env[opts.env]) {
				usedName = opts.env;
				currentValue = context.env[opts.env];
			}
			for (const { name, value } of state.options) {
				if (!nameSet.has(name)) continue;
				usedName = name;
				currentValue = value;
			}
			if (typeof currentValue === `string`) return applyValidator(usedName !== null && usedName !== void 0 ? usedName : key, currentValue, opts.validator);
			else return currentValue;
		}
	});
}
function StringPositional(opts = {}) {
	const { required = true } = opts;
	return makeCommandOption({
		definition(builder, key) {
			var _a;
			builder.addPositional({
				name: (_a = opts.name) !== null && _a !== void 0 ? _a : key,
				required: opts.required
			});
		},
		transformer(builder, key, state) {
			var _a;
			for (let i = 0; i < state.positionals.length; ++i) {
				if (state.positionals[i].extra === NoLimits) continue;
				if (required && state.positionals[i].extra === true) continue;
				if (!required && state.positionals[i].extra === false) continue;
				const [positional] = state.positionals.splice(i, 1);
				return applyValidator((_a = opts.name) !== null && _a !== void 0 ? _a : key, positional.value, opts.validator);
			}
		}
	});
}
function String$1(descriptor, ...args) {
	if (typeof descriptor === `string`) return StringOption(descriptor, ...args);
	else return StringPositional(descriptor);
}
//#endregion
//#region ../../node_modules/.pnpm/typanion@3.14.0/node_modules/typanion/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const simpleKeyRegExp = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
	function getPrintable(value) {
		if (value === null) return `null`;
		if (value === void 0) return `undefined`;
		if (value === ``) return `an empty string`;
		if (typeof value === "symbol") return `<${value.toString()}>`;
		if (Array.isArray(value)) return `an array`;
		return JSON.stringify(value);
	}
	function getPrintableArray(value, conjunction) {
		if (value.length === 0) return `nothing`;
		if (value.length === 1) return getPrintable(value[0]);
		const rest = value.slice(0, -1);
		const trailing = value[value.length - 1];
		const separator = value.length > 2 ? `, ${conjunction} ` : ` ${conjunction} `;
		return `${rest.map((value) => getPrintable(value)).join(`, `)}${separator}${getPrintable(trailing)}`;
	}
	function computeKey(state, key) {
		var _a, _b, _c;
		if (typeof key === `number`) return `${(_a = state === null || state === void 0 ? void 0 : state.p) !== null && _a !== void 0 ? _a : `.`}[${key}]`;
		else if (simpleKeyRegExp.test(key)) return `${(_b = state === null || state === void 0 ? void 0 : state.p) !== null && _b !== void 0 ? _b : ``}.${key}`;
		else return `${(_c = state === null || state === void 0 ? void 0 : state.p) !== null && _c !== void 0 ? _c : `.`}[${JSON.stringify(key)}]`;
	}
	function plural(n, singular, plural) {
		return n === 1 ? singular : plural;
	}
	const colorStringRegExp = /^#[0-9a-f]{6}$/i;
	const colorStringAlphaRegExp = /^#[0-9a-f]{6}([0-9a-f]{2})?$/i;
	const base64RegExp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
	const uuid4RegExp = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/i;
	const iso8601RegExp = /^(?:[1-9]\d{3}(-?)(?:(?:0[1-9]|1[0-2])\1(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])\1(?:29|30)|(?:0[13578]|1[02])(?:\1)31|00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[0-5]))|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)(?:(-?)02(?:\2)29|-?366))T(?:[01]\d|2[0-3])(:?)[0-5]\d(?:\3[0-5]\d)?(?:Z|[+-][01]\d(?:\3[0-5]\d)?)$/;
	function pushError({ errors, p } = {}, message) {
		errors === null || errors === void 0 || errors.push(`${p !== null && p !== void 0 ? p : `.`}: ${message}`);
		return false;
	}
	function makeSetter(target, key) {
		return (v) => {
			target[key] = v;
		};
	}
	function makeCoercionFn(target, key) {
		return (v) => {
			const previous = target[key];
			target[key] = v;
			return makeCoercionFn(target, key).bind(null, previous);
		};
	}
	function makeLazyCoercionFn(fn, orig, generator) {
		const commit = () => {
			fn(generator());
			return revert;
		};
		const revert = () => {
			fn(orig);
			return commit;
		};
		return commit;
	}
	/**
	* Create a validator that always returns true and never refines the type.
	*/
	function isUnknown() {
		return makeValidator({ test: (value, state) => {
			return true;
		} });
	}
	function isLiteral(expected) {
		return makeValidator({ test: (value, state) => {
			if (value !== expected) return pushError(state, `Expected ${getPrintable(expected)} (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is a string.
	* Refines the type to `string`.
	*/
	function isString() {
		return makeValidator({ test: (value, state) => {
			if (typeof value !== `string`) return pushError(state, `Expected a string (got ${getPrintable(value)})`);
			return true;
		} });
	}
	function isEnum(enumSpec) {
		const valuesArray = Array.isArray(enumSpec) ? enumSpec : Object.values(enumSpec);
		const isAlphaNum = valuesArray.every((item) => typeof item === "string" || typeof item === "number");
		const values = new Set(valuesArray);
		if (values.size === 1) return isLiteral([...values][0]);
		return makeValidator({ test: (value, state) => {
			if (!values.has(value)) {
				if (isAlphaNum) return pushError(state, `Expected one of ${getPrintableArray(valuesArray, `or`)} (got ${getPrintable(value)})`);
				else return pushError(state, `Expected a valid enumeration value (got ${getPrintable(value)})`);
			}
			return true;
		} });
	}
	const BOOLEAN_COERCIONS = /* @__PURE__ */ new Map([
		[`true`, true],
		[`True`, true],
		[`1`, true],
		[1, true],
		[`false`, false],
		[`False`, false],
		[`0`, false],
		[0, false]
	]);
	/**
	* Create a validator that only returns true when the tested value is a
	* boolean. Refines the type to `boolean`.
	*
	* Supports coercion:
	* - 'true' / 'True' / '1' / 1 will turn to `true`
	* - 'false' / 'False' / '0' / 0 will turn to `false`
	*/
	function isBoolean() {
		return makeValidator({ test: (value, state) => {
			var _a;
			if (typeof value !== `boolean`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					const coercion = BOOLEAN_COERCIONS.get(value);
					if (typeof coercion !== `undefined`) {
						state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, coercion)]);
						return true;
					}
				}
				return pushError(state, `Expected a boolean (got ${getPrintable(value)})`);
			}
			return true;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is a
	* number (including floating numbers; use `cascade` and `isInteger` to
	* restrict the range further). Refines the type to `number`.
	*
	* Supports coercion.
	*/
	function isNumber() {
		return makeValidator({ test: (value, state) => {
			var _a;
			if (typeof value !== `number`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					let coercion;
					if (typeof value === `string`) {
						let val;
						try {
							val = JSON.parse(value);
						} catch (_b) {}
						if (typeof val === `number`) {
							if (JSON.stringify(val) === value) coercion = val;
							else return pushError(state, `Received a number that can't be safely represented by the runtime (${value})`);
						}
					}
					if (typeof coercion !== `undefined`) {
						state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, coercion)]);
						return true;
					}
				}
				return pushError(state, `Expected a number (got ${getPrintable(value)})`);
			}
			return true;
		} });
	}
	/**
	* Important: This validator only makes sense when used in conjunction with
	* coercion! It will always error when used without.
	*
	* Create a validator that only returns true when the tested value is a
	* JSON representation of the expected type. Refines the type to the
	* expected type, and casts the value into its inner value.
	*/
	function isPayload(spec) {
		return makeValidator({ test: (value, state) => {
			var _a;
			if (typeof (state === null || state === void 0 ? void 0 : state.coercions) === `undefined`) return pushError(state, `The isPayload predicate can only be used with coercion enabled`);
			if (typeof state.coercion === `undefined`) return pushError(state, `Unbound coercion result`);
			if (typeof value !== `string`) return pushError(state, `Expected a string (got ${getPrintable(value)})`);
			let inner;
			try {
				inner = JSON.parse(value);
			} catch (_b) {
				return pushError(state, `Expected a JSON string (got ${getPrintable(value)})`);
			}
			const wrapper = { value: inner };
			if (!spec(inner, Object.assign(Object.assign({}, state), { coercion: makeCoercionFn(wrapper, `value`) }))) return false;
			state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, wrapper.value)]);
			return true;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is a
	* valid date. Refines the type to `Date`.
	*
	* Supports coercion via one of the following formats:
	* - ISO86001 strings
	* - Unix timestamps
	*/
	function isDate() {
		return makeValidator({ test: (value, state) => {
			var _a;
			if (!(value instanceof Date)) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					let coercion;
					if (typeof value === `string` && iso8601RegExp.test(value)) coercion = new Date(value);
					else {
						let timestamp;
						if (typeof value === `string`) {
							let val;
							try {
								val = JSON.parse(value);
							} catch (_b) {}
							if (typeof val === `number`) timestamp = val;
						} else if (typeof value === `number`) timestamp = value;
						if (typeof timestamp !== `undefined`) {
							if (Number.isSafeInteger(timestamp) || !Number.isSafeInteger(timestamp * 1e3)) coercion = /* @__PURE__ */ new Date(timestamp * 1e3);
							else return pushError(state, `Received a timestamp that can't be safely represented by the runtime (${value})`);
						}
					}
					if (typeof coercion !== `undefined`) {
						state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, coercion)]);
						return true;
					}
				}
				return pushError(state, `Expected a date (got ${getPrintable(value)})`);
			}
			return true;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* array whose all values match the provided subspec. Refines the type to
	* `Array<T>`, with `T` being the subspec inferred type.
	*
	* Supports coercion if the `delimiter` option is set, in which case strings
	* will be split accordingly.
	*/
	function isArray(spec, { delimiter } = {}) {
		return makeValidator({ test: (value, state) => {
			var _a;
			const originalValue = value;
			if (typeof value === `string` && typeof delimiter !== `undefined`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					value = value.split(delimiter);
				}
			}
			if (!Array.isArray(value)) return pushError(state, `Expected an array (got ${getPrintable(value)})`);
			let valid = true;
			for (let t = 0, T = value.length; t < T; ++t) {
				valid = spec(value[t], Object.assign(Object.assign({}, state), {
					p: computeKey(state, t),
					coercion: makeCoercionFn(value, t)
				})) && valid;
				if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
			}
			if (value !== originalValue) state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, value)]);
			return valid;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* set whose all values match the provided subspec. Refines the type to
	* `Set<T>`, with `T` being the subspec inferred type.
	*
	* Supports coercion from arrays (or anything that can be coerced into an
	* array).
	*/
	function isSet(spec, { delimiter } = {}) {
		const isArrayValidator = isArray(spec, { delimiter });
		return makeValidator({ test: (value, state) => {
			var _a, _b;
			if (Object.getPrototypeOf(value).toString() === `[object Set]`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					const originalValues = [...value];
					const coercedValues = [...value];
					if (!isArrayValidator(coercedValues, Object.assign(Object.assign({}, state), { coercion: void 0 }))) return false;
					const updateValue = () => coercedValues.some((val, t) => val !== originalValues[t]) ? new Set(coercedValues) : value;
					state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, makeLazyCoercionFn(state.coercion, value, updateValue)]);
					return true;
				} else {
					let valid = true;
					for (const subValue of value) {
						valid = spec(subValue, Object.assign({}, state)) && valid;
						if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
					}
					return valid;
				}
			}
			if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
				const store = { value };
				if (!isArrayValidator(value, Object.assign(Object.assign({}, state), { coercion: makeCoercionFn(store, `value`) }))) return false;
				state.coercions.push([(_b = state.p) !== null && _b !== void 0 ? _b : `.`, makeLazyCoercionFn(state.coercion, value, () => new Set(store.value))]);
				return true;
			}
			return pushError(state, `Expected a set (got ${getPrintable(value)})`);
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* map whose all values match the provided subspecs. Refines the type to
	* `Map<U, V>`, with `U` being the key subspec inferred type and `V` being
	* the value subspec inferred type.
	*
	* Supports coercion from array of tuples (or anything that can be coerced into
	* an array of tuples).
	*/
	function isMap(keySpec, valueSpec) {
		const isArrayValidator = isArray(isTuple([keySpec, valueSpec]));
		const isRecordValidator = isRecord(valueSpec, { keys: keySpec });
		return makeValidator({ test: (value, state) => {
			var _a, _b, _c;
			if (Object.getPrototypeOf(value).toString() === `[object Map]`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					const originalValues = [...value];
					const coercedValues = [...value];
					if (!isArrayValidator(coercedValues, Object.assign(Object.assign({}, state), { coercion: void 0 }))) return false;
					const updateValue = () => coercedValues.some((val, t) => val[0] !== originalValues[t][0] || val[1] !== originalValues[t][1]) ? new Map(coercedValues) : value;
					state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, makeLazyCoercionFn(state.coercion, value, updateValue)]);
					return true;
				} else {
					let valid = true;
					for (const [key, subValue] of value) {
						valid = keySpec(key, Object.assign({}, state)) && valid;
						if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
						valid = valueSpec(subValue, Object.assign(Object.assign({}, state), { p: computeKey(state, key) })) && valid;
						if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
					}
					return valid;
				}
			}
			if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
				const store = { value };
				if (Array.isArray(value)) {
					if (!isArrayValidator(value, Object.assign(Object.assign({}, state), { coercion: void 0 }))) return false;
					state.coercions.push([(_b = state.p) !== null && _b !== void 0 ? _b : `.`, makeLazyCoercionFn(state.coercion, value, () => new Map(store.value))]);
					return true;
				} else {
					if (!isRecordValidator(value, Object.assign(Object.assign({}, state), { coercion: makeCoercionFn(store, `value`) }))) return false;
					state.coercions.push([(_c = state.p) !== null && _c !== void 0 ? _c : `.`, makeLazyCoercionFn(state.coercion, value, () => new Map(Object.entries(store.value)))]);
					return true;
				}
			}
			return pushError(state, `Expected a map (got ${getPrintable(value)})`);
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is a
	* tuple whose each value matches the corresponding subspec. Refines the type
	* into a tuple whose each item has the type inferred by the corresponding
	* tuple.
	*
	* Supports coercion if the `delimiter` option is set, in which case strings
	* will be split accordingly.
	*/
	function isTuple(spec, { delimiter } = {}) {
		const lengthValidator = hasExactLength(spec.length);
		return makeValidator({ test: (value, state) => {
			var _a;
			if (typeof value === `string` && typeof delimiter !== `undefined`) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					value = value.split(delimiter);
					state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, value)]);
				}
			}
			if (!Array.isArray(value)) return pushError(state, `Expected a tuple (got ${getPrintable(value)})`);
			let valid = lengthValidator(value, Object.assign({}, state));
			for (let t = 0, T = value.length; t < T && t < spec.length; ++t) {
				valid = spec[t](value[t], Object.assign(Object.assign({}, state), {
					p: computeKey(state, t),
					coercion: makeCoercionFn(value, t)
				})) && valid;
				if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
			}
			return valid;
		} });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* object with any amount of properties that must all match the provided
	* subspec. Refines the type to `Record<string, T>`, with `T` being the
	* subspec inferred type.
	*
	* Keys can be optionally validated as well by using the `keys` optional
	* subspec parameter.
	*/
	function isRecord(spec, { keys: keySpec = null } = {}) {
		const isArrayValidator = isArray(isTuple([keySpec !== null && keySpec !== void 0 ? keySpec : isString(), spec]));
		return makeValidator({ test: (value, state) => {
			var _a;
			if (Array.isArray(value)) {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
					if (!isArrayValidator(value, Object.assign(Object.assign({}, state), { coercion: void 0 }))) return false;
					value = Object.fromEntries(value);
					state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, value)]);
					return true;
				}
			}
			if (typeof value !== `object` || value === null) return pushError(state, `Expected an object (got ${getPrintable(value)})`);
			const keys = Object.keys(value);
			let valid = true;
			for (let t = 0, T = keys.length; t < T && (valid || (state === null || state === void 0 ? void 0 : state.errors) != null); ++t) {
				const key = keys[t];
				const sub = value[key];
				if (key === `__proto__` || key === `constructor`) {
					valid = pushError(Object.assign(Object.assign({}, state), { p: computeKey(state, key) }), `Unsafe property name`);
					continue;
				}
				if (keySpec !== null && !keySpec(key, state)) {
					valid = false;
					continue;
				}
				if (!spec(sub, Object.assign(Object.assign({}, state), {
					p: computeKey(state, key),
					coercion: makeCoercionFn(value, key)
				}))) {
					valid = false;
					continue;
				}
			}
			return valid;
		} });
	}
	/**
	* @deprecated Replace `isDict` by `isRecord`
	*/
	function isDict(spec, opts = {}) {
		return isRecord(spec, opts);
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* object whose all properties match their corresponding subspec. Refines
	* the type into an object whose each property has the type inferred by the
	* corresponding subspec.
	*
	* Unlike `t.isPartial`, `t.isObject` doesn't allow extraneous properties by
	* default. This behaviour can be altered by using the `extra` optional
	* subspec parameter, which will be called to validate an object only
	* containing the extraneous properties.
	*
	* Calling `t.isObject(..., {extra: t.isRecord(t.isUnknown())})` is
	* essentially the same as calling `t.isPartial(...)`.
	*/
	function isObject(props, { extra: extraSpec = null } = {}) {
		const specKeys = Object.keys(props);
		const validator = makeValidator({ test: (value, state) => {
			if (typeof value !== `object` || value === null) return pushError(state, `Expected an object (got ${getPrintable(value)})`);
			const keys = /* @__PURE__ */ new Set([...specKeys, ...Object.keys(value)]);
			const extra = {};
			let valid = true;
			for (const key of keys) {
				if (key === `constructor` || key === `__proto__`) valid = pushError(Object.assign(Object.assign({}, state), { p: computeKey(state, key) }), `Unsafe property name`);
				else {
					const spec = Object.prototype.hasOwnProperty.call(props, key) ? props[key] : void 0;
					const sub = Object.prototype.hasOwnProperty.call(value, key) ? value[key] : void 0;
					if (typeof spec !== `undefined`) valid = spec(sub, Object.assign(Object.assign({}, state), {
						p: computeKey(state, key),
						coercion: makeCoercionFn(value, key)
					})) && valid;
					else if (extraSpec === null) valid = pushError(Object.assign(Object.assign({}, state), { p: computeKey(state, key) }), `Extraneous property (got ${getPrintable(sub)})`);
					else Object.defineProperty(extra, key, {
						enumerable: true,
						get: () => sub,
						set: makeSetter(value, key)
					});
				}
				if (!valid && (state === null || state === void 0 ? void 0 : state.errors) == null) break;
			}
			if (extraSpec !== null && (valid || (state === null || state === void 0 ? void 0 : state.errors) != null)) valid = extraSpec(extra, state) && valid;
			return valid;
		} });
		return Object.assign(validator, { properties: props });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* object whose all properties match their corresponding subspec. Refines
	* the type into an object whose each property has the type inferred by the
	* corresponding subspec.
	*
	* Unlike `t.isObject`, `t.isPartial` allows extraneous properties. The
	* resulting type will reflect this behaviour by including an index
	* signature (each extraneous property being typed `unknown`).
	*
	* Calling `t.isPartial(...)` is essentially the same as calling
	* `t.isObject(..., {extra: t.isRecord(t.isUnknown())})`.
	*/
	function isPartial(props) {
		return isObject(props, { extra: isRecord(isUnknown()) });
	}
	/**
	* Create a validator that only returns true when the tested value is an
	* object whose prototype is derived from the given class. Refines the type
	* into a class instance.
	*/
	const isInstanceOf = (constructor) => makeValidator({ test: (value, state) => {
		if (!(value instanceof constructor)) return pushError(state, `Expected an instance of ${constructor.name} (got ${getPrintable(value)})`);
		return true;
	} });
	/**
	* Create a validator that only returns true when the tested value is an
	* object matching any of the provided subspecs. If the optional `exclusive`
	* parameter is set to `true`, the behaviour changes so that the validator
	* only returns true when exactly one subspec matches.
	*/
	const isOneOf = (specs, { exclusive = false } = {}) => makeValidator({ test: (value, state) => {
		var _a, _b, _c;
		const matches = [];
		const errorBuffer = typeof (state === null || state === void 0 ? void 0 : state.errors) !== `undefined` ? [] : void 0;
		for (let t = 0, T = specs.length; t < T; ++t) {
			const subErrors = typeof (state === null || state === void 0 ? void 0 : state.errors) !== `undefined` ? [] : void 0;
			const subCoercions = typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined` ? [] : void 0;
			if (specs[t](value, Object.assign(Object.assign({}, state), {
				errors: subErrors,
				coercions: subCoercions,
				p: `${(_a = state === null || state === void 0 ? void 0 : state.p) !== null && _a !== void 0 ? _a : `.`}#${t + 1}`
			}))) {
				matches.push([`#${t + 1}`, subCoercions]);
				if (!exclusive) break;
			} else errorBuffer === null || errorBuffer === void 0 || errorBuffer.push(subErrors[0]);
		}
		if (matches.length === 1) {
			const [, subCoercions] = matches[0];
			if (typeof subCoercions !== `undefined`) (_b = state === null || state === void 0 ? void 0 : state.coercions) === null || _b === void 0 || _b.push(...subCoercions);
			return true;
		}
		if (matches.length > 1) pushError(state, `Expected to match exactly a single predicate (matched ${matches.join(`, `)})`);
		else (_c = state === null || state === void 0 ? void 0 : state.errors) === null || _c === void 0 || _c.push(...errorBuffer);
		return false;
	} });
	function makeTrait(value) {
		return () => {
			return value;
		};
	}
	function makeValidator({ test }) {
		return makeTrait(test)();
	}
	var TypeAssertionError = class extends Error {
		constructor({ errors } = {}) {
			let errorMessage = `Type mismatch`;
			if (errors && errors.length > 0) {
				errorMessage += `\n`;
				for (const error of errors) errorMessage += `\n- ${error}`;
			}
			super(errorMessage);
		}
	};
	/**
	* Check that the specified value matches the given validator, and throws an
	* exception if it doesn't. Refine the type if it passes.
	*/
	function assert(val, validator) {
		if (!validator(val)) throw new TypeAssertionError();
	}
	/**
	* Check that the specified value matches the given validator, and throws an
	* exception if it doesn't. Refine the type if it passes.
	*
	* Thrown exceptions include details about what exactly looks invalid in the
	* tested value.
	*/
	function assertWithErrors(val, validator) {
		const errors = [];
		if (!validator(val, { errors })) throw new TypeAssertionError({ errors });
	}
	/**
	* Compile-time only. Refine the type as if the validator was matching the
	* tested value, but doesn't actually run it. Similar to the classic `as`
	* operator in TypeScript.
	*/
	function softAssert(val, validator) {}
	function as(value, validator, { coerce = false, errors: storeErrors, throw: throws } = {}) {
		const errors = storeErrors ? [] : void 0;
		if (!coerce) {
			if (validator(value, { errors })) return throws ? value : {
				value,
				errors: void 0
			};
			else if (!throws) return {
				value: void 0,
				errors: errors !== null && errors !== void 0 ? errors : true
			};
			else throw new TypeAssertionError({ errors });
		}
		const state = { value };
		const coercion = makeCoercionFn(state, `value`);
		const coercions = [];
		if (!validator(value, {
			errors,
			coercion,
			coercions
		})) {
			if (!throws) return {
				value: void 0,
				errors: errors !== null && errors !== void 0 ? errors : true
			};
			else throw new TypeAssertionError({ errors });
		}
		for (const [, apply] of coercions) apply();
		if (throws) return state.value;
		else return {
			value: state.value,
			errors: void 0
		};
	}
	/**
	* Create and return a new function that apply the given validators to each
	* corresponding argument passed to the function and throws an exception in
	* case of a mismatch.
	*/
	function fn(validators, fn) {
		const isValidArgList = isTuple(validators);
		return ((...args) => {
			if (!isValidArgList(args)) throw new TypeAssertionError();
			return fn(...args);
		});
	}
	/**
	* Create a validator that checks that the tested array or string has at least
	* the specified length.
	*/
	function hasMinLength(length) {
		return makeValidator({ test: (value, state) => {
			if (!(value.length >= length)) return pushError(state, `Expected to have a length of at least ${length} elements (got ${value.length})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested array or string has at most
	* the specified length.
	*/
	function hasMaxLength(length) {
		return makeValidator({ test: (value, state) => {
			if (!(value.length <= length)) return pushError(state, `Expected to have a length of at most ${length} elements (got ${value.length})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested array or string has exactly
	* the specified length.
	*/
	function hasExactLength(length) {
		return makeValidator({ test: (value, state) => {
			if (!(value.length === length)) return pushError(state, `Expected to have a length of exactly ${length} elements (got ${value.length})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested array only contains unique
	* elements. The optional `map` parameter lets you define a transform to
	* apply before making the check (the result of this transform will be
	* discarded afterwards).
	*/
	function hasUniqueItems({ map } = {}) {
		return makeValidator({ test: (value, state) => {
			const set = /* @__PURE__ */ new Set();
			const dup = /* @__PURE__ */ new Set();
			for (let t = 0, T = value.length; t < T; ++t) {
				const sub = value[t];
				const key = typeof map !== `undefined` ? map(sub) : sub;
				if (set.has(key)) {
					if (dup.has(key)) continue;
					pushError(state, `Expected to contain unique elements; got a duplicate with ${getPrintable(value)}`);
					dup.add(key);
				} else set.add(key);
			}
			return dup.size === 0;
		} });
	}
	/**
	* Create a validator that checks that the tested number is strictly less than 0.
	*/
	function isNegative() {
		return makeValidator({ test: (value, state) => {
			if (!(value <= 0)) return pushError(state, `Expected to be negative (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is equal or greater
	* than 0.
	*/
	function isPositive() {
		return makeValidator({ test: (value, state) => {
			if (!(value >= 0)) return pushError(state, `Expected to be positive (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is equal or greater
	* than the specified reference.
	*/
	function isAtLeast(n) {
		return makeValidator({ test: (value, state) => {
			if (!(value >= n)) return pushError(state, `Expected to be at least ${n} (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is equal or smaller
	* than the specified reference.
	*/
	function isAtMost(n) {
		return makeValidator({ test: (value, state) => {
			if (!(value <= n)) return pushError(state, `Expected to be at most ${n} (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is between the
	* specified references (including the upper boundary).
	*/
	function isInInclusiveRange(a, b) {
		return makeValidator({ test: (value, state) => {
			if (!(value >= a && value <= b)) return pushError(state, `Expected to be in the [${a}; ${b}] range (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is between the
	* specified references (excluding the upper boundary).
	*/
	function isInExclusiveRange(a, b) {
		return makeValidator({ test: (value, state) => {
			if (!(value >= a && value < b)) return pushError(state, `Expected to be in the [${a}; ${b}[ range (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested number is an integer.
	*
	* By default Typanion will also check that it's a *safe* integer. For example,
	* 2^53 wouldn't be a safe integer because 2^53+1 would be rounded to 2^53,
	* which could put your applications at risk when used in loops.
	*/
	function isInteger({ unsafe = false } = {}) {
		return makeValidator({ test: (value, state) => {
			if (value !== Math.round(value)) return pushError(state, `Expected to be an integer (got ${value})`);
			if (!unsafe && !Number.isSafeInteger(value)) return pushError(state, `Expected to be a safe integer (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string matches the given
	* regular expression.
	*/
	function matchesRegExp(regExp) {
		return makeValidator({ test: (value, state) => {
			if (!regExp.test(value)) return pushError(state, `Expected to match the pattern ${regExp.toString()} (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string only contain lowercase
	* characters.
	*/
	function isLowerCase() {
		return makeValidator({ test: (value, state) => {
			if (value !== value.toLowerCase()) return pushError(state, `Expected to be all-lowercase (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string only contain uppercase
	* characters.
	*/
	function isUpperCase() {
		return makeValidator({ test: (value, state) => {
			if (value !== value.toUpperCase()) return pushError(state, `Expected to be all-uppercase (got ${value})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string is a valid UUID v4.
	*/
	function isUUID4() {
		return makeValidator({ test: (value, state) => {
			if (!uuid4RegExp.test(value)) return pushError(state, `Expected to be a valid UUID v4 (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string is a valid ISO8601
	* date.
	*/
	function isISO8601() {
		return makeValidator({ test: (value, state) => {
			if (!iso8601RegExp.test(value)) return pushError(state, `Expected to be a valid ISO 8601 date string (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string is a valid hexadecimal
	* color. Setting the optional `alpha` parameter to `true` allows an additional
	* transparency channel to be included.
	*/
	function isHexColor({ alpha = false }) {
		return makeValidator({ test: (value, state) => {
			if (!(alpha ? colorStringRegExp.test(value) : colorStringAlphaRegExp.test(value))) return pushError(state, `Expected to be a valid hexadecimal color string (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string is valid base64.
	*/
	function isBase64() {
		return makeValidator({ test: (value, state) => {
			if (!base64RegExp.test(value)) return pushError(state, `Expected to be a valid base 64 string (got ${getPrintable(value)})`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested string is valid JSON. A
	* optional spec can be passed as parameter, in which case the data will be
	* deserialized and validated against the spec (coercion will be disabled
	* for this check, and even if successful the returned value will still be
	* the original string).
	*/
	function isJSON(spec = isUnknown()) {
		return makeValidator({ test: (value, state) => {
			let data;
			try {
				data = JSON.parse(value);
			} catch (_a) {
				return pushError(state, `Expected to be a valid JSON string (got ${getPrintable(value)})`);
			}
			return spec(data, state);
		} });
	}
	function cascade(spec, ...followups) {
		const resolvedFollowups = Array.isArray(followups[0]) ? followups[0] : followups;
		return makeValidator({ test: (value, state) => {
			var _a, _b;
			const context = { value };
			const subCoercion = typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined` ? makeCoercionFn(context, `value`) : void 0;
			const subCoercions = typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined` ? [] : void 0;
			if (!spec(value, Object.assign(Object.assign({}, state), {
				coercion: subCoercion,
				coercions: subCoercions
			}))) return false;
			const reverts = [];
			if (typeof subCoercions !== `undefined`) for (const [, coercion] of subCoercions) reverts.push(coercion());
			try {
				if (typeof (state === null || state === void 0 ? void 0 : state.coercions) !== `undefined`) {
					if (context.value !== value) {
						if (typeof (state === null || state === void 0 ? void 0 : state.coercion) === `undefined`) return pushError(state, `Unbound coercion result`);
						state.coercions.push([(_a = state.p) !== null && _a !== void 0 ? _a : `.`, state.coercion.bind(null, context.value)]);
					}
					(_b = state === null || state === void 0 ? void 0 : state.coercions) === null || _b === void 0 || _b.push(...subCoercions);
				}
				return resolvedFollowups.every((spec) => {
					return spec(context.value, state);
				});
			} finally {
				for (const revert of reverts) revert();
			}
		} });
	}
	function applyCascade(spec, ...followups) {
		return cascade(spec, Array.isArray(followups[0]) ? followups[0] : followups);
	}
	/**
	* Wraps the given spec to also allow `undefined`.
	*/
	function isOptional(spec) {
		return makeValidator({ test: (value, state) => {
			if (typeof value === `undefined`) return true;
			return spec(value, state);
		} });
	}
	/**
	* Wraps the given spec to also allow `null`.
	*/
	function isNullable(spec) {
		return makeValidator({ test: (value, state) => {
			if (value === null) return true;
			return spec(value, state);
		} });
	}
	const checks = {
		missing: (keys, key) => keys.has(key),
		undefined: (keys, key, value) => keys.has(key) && typeof value[key] !== `undefined`,
		nil: (keys, key, value) => keys.has(key) && value[key] != null,
		falsy: (keys, key, value) => keys.has(key) && !!value[key]
	};
	/**
	* Create a validator that checks that the tested object contains the specified
	* keys.
	*/
	function hasRequiredKeys(requiredKeys, options) {
		var _a;
		const requiredSet = new Set(requiredKeys);
		const check = checks[(_a = options === null || options === void 0 ? void 0 : options.missingIf) !== null && _a !== void 0 ? _a : "missing"];
		return makeValidator({ test: (value, state) => {
			const keys = new Set(Object.keys(value));
			const problems = [];
			for (const key of requiredSet) if (!check(keys, key, value)) problems.push(key);
			if (problems.length > 0) return pushError(state, `Missing required ${plural(problems.length, `property`, `properties`)} ${getPrintableArray(problems, `and`)}`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested object contains at least one
	* of the specified keys.
	*/
	function hasAtLeastOneKey(requiredKeys, options) {
		var _a;
		const requiredSet = new Set(requiredKeys);
		const check = checks[(_a = options === null || options === void 0 ? void 0 : options.missingIf) !== null && _a !== void 0 ? _a : "missing"];
		return makeValidator({ test: (value, state) => {
			if (!Object.keys(value).some((key) => check(requiredSet, key, value))) return pushError(state, `Missing at least one property from ${getPrintableArray(Array.from(requiredSet), `or`)}`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested object contains none of the
	* specified keys.
	*/
	function hasForbiddenKeys(forbiddenKeys, options) {
		var _a;
		const forbiddenSet = new Set(forbiddenKeys);
		const check = checks[(_a = options === null || options === void 0 ? void 0 : options.missingIf) !== null && _a !== void 0 ? _a : "missing"];
		return makeValidator({ test: (value, state) => {
			const keys = new Set(Object.keys(value));
			const problems = [];
			for (const key of forbiddenSet) if (check(keys, key, value)) problems.push(key);
			if (problems.length > 0) return pushError(state, `Forbidden ${plural(problems.length, `property`, `properties`)} ${getPrintableArray(problems, `and`)}`);
			return true;
		} });
	}
	/**
	* Create a validator that checks that the tested object contains at most one
	* of the specified keys.
	*/
	function hasMutuallyExclusiveKeys(exclusiveKeys, options) {
		var _a;
		const exclusiveSet = new Set(exclusiveKeys);
		const check = checks[(_a = options === null || options === void 0 ? void 0 : options.missingIf) !== null && _a !== void 0 ? _a : "missing"];
		return makeValidator({ test: (value, state) => {
			const keys = new Set(Object.keys(value));
			const used = [];
			for (const key of exclusiveSet) if (check(keys, key, value)) used.push(key);
			if (used.length > 1) return pushError(state, `Mutually exclusive properties ${getPrintableArray(used, `and`)}`);
			return true;
		} });
	}
	(function(KeyRelationship) {
		KeyRelationship["Forbids"] = "Forbids";
		KeyRelationship["Requires"] = "Requires";
	})(exports.KeyRelationship || (exports.KeyRelationship = {}));
	const keyRelationships = {
		[exports.KeyRelationship.Forbids]: {
			expect: false,
			message: `forbids using`
		},
		[exports.KeyRelationship.Requires]: {
			expect: true,
			message: `requires using`
		}
	};
	/**
	* Create a validator that checks that, when the specified subject property is
	* set, the relationship is satisfied.
	*/
	function hasKeyRelationship(subject, relationship, others, options) {
		var _a, _b;
		const skipped = new Set((_a = options === null || options === void 0 ? void 0 : options.ignore) !== null && _a !== void 0 ? _a : []);
		const check = checks[(_b = options === null || options === void 0 ? void 0 : options.missingIf) !== null && _b !== void 0 ? _b : "missing"];
		const otherSet = new Set(others);
		const spec = keyRelationships[relationship];
		const conjunction = relationship === exports.KeyRelationship.Forbids ? `or` : `and`;
		return makeValidator({ test: (value, state) => {
			const keys = new Set(Object.keys(value));
			if (!check(keys, subject, value) || skipped.has(value[subject])) return true;
			const problems = [];
			for (const key of otherSet) if ((check(keys, key, value) && !skipped.has(value[key])) !== spec.expect) problems.push(key);
			if (problems.length >= 1) return pushError(state, `Property "${subject}" ${spec.message} ${plural(problems.length, `property`, `properties`)} ${getPrintableArray(problems, conjunction)}`);
			return true;
		} });
	}
	exports.TypeAssertionError = TypeAssertionError;
	exports.applyCascade = applyCascade;
	exports.as = as;
	exports.assert = assert;
	exports.assertWithErrors = assertWithErrors;
	exports.cascade = cascade;
	exports.fn = fn;
	exports.hasAtLeastOneKey = hasAtLeastOneKey;
	exports.hasExactLength = hasExactLength;
	exports.hasForbiddenKeys = hasForbiddenKeys;
	exports.hasKeyRelationship = hasKeyRelationship;
	exports.hasMaxLength = hasMaxLength;
	exports.hasMinLength = hasMinLength;
	exports.hasMutuallyExclusiveKeys = hasMutuallyExclusiveKeys;
	exports.hasRequiredKeys = hasRequiredKeys;
	exports.hasUniqueItems = hasUniqueItems;
	exports.isArray = isArray;
	exports.isAtLeast = isAtLeast;
	exports.isAtMost = isAtMost;
	exports.isBase64 = isBase64;
	exports.isBoolean = isBoolean;
	exports.isDate = isDate;
	exports.isDict = isDict;
	exports.isEnum = isEnum;
	exports.isHexColor = isHexColor;
	exports.isISO8601 = isISO8601;
	exports.isInExclusiveRange = isInExclusiveRange;
	exports.isInInclusiveRange = isInInclusiveRange;
	exports.isInstanceOf = isInstanceOf;
	exports.isInteger = isInteger;
	exports.isJSON = isJSON;
	exports.isLiteral = isLiteral;
	exports.isLowerCase = isLowerCase;
	exports.isMap = isMap;
	exports.isNegative = isNegative;
	exports.isNullable = isNullable;
	exports.isNumber = isNumber;
	exports.isObject = isObject;
	exports.isOneOf = isOneOf;
	exports.isOptional = isOptional;
	exports.isPartial = isPartial;
	exports.isPayload = isPayload;
	exports.isPositive = isPositive;
	exports.isRecord = isRecord;
	exports.isSet = isSet;
	exports.isString = isString;
	exports.isTuple = isTuple;
	exports.isUUID4 = isUUID4;
	exports.isUnknown = isUnknown;
	exports.isUpperCase = isUpperCase;
	exports.makeTrait = makeTrait;
	exports.makeValidator = makeValidator;
	exports.matchesRegExp = matchesRegExp;
	exports.softAssert = softAssert;
}));
//#endregion
//#region src/cli/RootCommand.ts
var import_lib = require_lib();
const isLogLevel = (0, import_lib.isEnum)([
	"debug",
	"error",
	"info",
	"silent",
	"warn"
]);
const isColorModes = (0, import_lib.isEnum)([
	"always",
	"auto",
	"never"
]);
var RootCommand = class extends Command {
	static paths = [Command.Default];
	static usage = Command.Usage({
		description: "Run a script from the managed-script configuration.",
		details: "Resolves the script name from the first positional argument, MANAGED_SCRIPT_NAME or npm_lifecycle_event, then executes it. Use --dry-run,-n to print the resolved command without executing it. Use --loglevel, --silent,-s or --verbose,-v to control status messages, forwarded to the script as MANAGED_SCRIPT_LOGLEVEL. Use --color[=WHEN] or --no-color to control ANSI colors (WHEN: auto, always, never)."
	});
	color = String$1("--color", {
		description: "Control ANSI colors (auto, always, never). Bare --color means always.",
		required: false,
		tolerateBoolean: true,
		validator: isColorModes
	});
	cwd = String$1("--cwd", {
		description: "Working directory used to resolve configuration and run the script.",
		required: false
	});
	dryRun = Boolean("--dry-run,-n", false, { description: "Print the resolved command instead of executing it." });
	loglevel = String$1("--loglevel", {
		description: "Set the log level (silent, error, warn, info, debug). Default: info.",
		required: false,
		validator: isLogLevel
	});
	scriptArgs = Rest();
	silent = Boolean("--silent,-s", false, { description: "Alias for --loglevel silent." });
	verbose = Boolean("--verbose,-v", false, { description: "Alias for --loglevel debug." });
	async execute() {
		const [scriptName, ...scriptArgs] = this.scriptArgs;
		let color;
		if (this.color === true) color = "always";
		else if (this.color === false) color = "never";
		else if (this.color != null) color = this.color;
		let logLevel;
		if (this.silent) logLevel = "silent";
		else if (this.verbose) logLevel = "debug";
		else if (this.loglevel != null) logLevel = this.loglevel;
		try {
			await ManagedScript.runScript({
				context: {
					cli: {
						color,
						cwd: this.cwd,
						dryRun: this.dryRun,
						logLevel
					},
					stderr: this.context.stderr,
					stdout: this.context.stdout
				},
				parameters: {
					scriptArgs,
					scriptName
				}
			});
			return 0;
		} catch (error) {
			this.context.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
			return 1;
		}
	}
};
//#endregion
//#region src/cli/runCLI.ts
async function runCLI() {
	const cli = new Cli({
		binaryLabel: meta.binaryLabel,
		binaryName: meta.binaryName,
		binaryVersion: meta.binaryVersion
	});
	cli.register(RootCommand);
	cli.register(HelpCommand);
	cli.register(VersionCommand);
	try {
		await cli.runExit(process.argv.slice(2), {
			stderr: process.stderr,
			stdin: process.stdin,
			stdout: process.stdout
		});
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		process.exitCode = 1;
	}
}
//#endregion
//#region src/cli.ts
runCLI();
//#endregion
export {};

//# sourceMappingURL=cli.js.map