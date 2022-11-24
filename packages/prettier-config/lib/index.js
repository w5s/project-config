"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettierConfig = {
    singleQuote: true,
    trailingComma: 'es5',
    overrides: [
        {
            files: ['*.css', '*.scss'],
            options: {
                trailingComma: 'none',
            },
        },
    ],
};
exports.default = prettierConfig;
//# sourceMappingURL=index.js.map