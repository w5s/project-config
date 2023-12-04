"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineConfig = void 0;
const configDefaultMap_js_1 = require("./configDefaultMap.js");
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param getConfig - the application custom configuration
 */
function defineConfig(type, getConfig) {
    const baseConfig = configDefaultMap_js_1.configDefaultMap[type];
    return getConfig == null ? baseConfig : getConfig(baseConfig);
}
exports.defineConfig = defineConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmluZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrREFBeUQ7QUFHekQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixZQUFZLENBQUMsSUFBZ0IsRUFBRSxTQUFxRDtJQUNsRyxNQUFNLFVBQVUsR0FBRyxzQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxPQUFPLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFIRCxvQ0FHQyJ9