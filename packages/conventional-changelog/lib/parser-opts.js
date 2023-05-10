"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parserOpts = void 0;
exports.parserOpts = {
    headerPattern: new RegExp(
    // Type
    `^(?<type>\\S*)? ` +
        // Scope
        `(?:\\((?<scope>.*)\\):? )?` +
        // Subject
        `(?<subject>.*)$`, 'u'),
    headerCorrespondence: ['type', 'scope', 'subject'],
    revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
    revertCorrespondence: [`header`, `hash`],
};
