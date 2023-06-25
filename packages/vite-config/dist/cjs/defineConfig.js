"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineConfig = void 0;
const vite_1 = require("vite");
const configDefaultMap_js_1 = require("./configDefaultMap.js");
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param config - the application custom configuration
 */
function defineConfig(type, config) {
    const baseConfig = configDefaultMap_js_1.configDefaultMap[type];
    return config == null
        ? baseConfig
        : typeof config === 'function'
            ? (configEnv) => (0, vite_1.mergeConfig)(baseConfig, config(configEnv))
            : (0, vite_1.mergeConfig)(baseConfig, config);
}
exports.defineConfig = defineConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmluZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQkFBbUM7QUFDbkMsK0RBQXlEO0FBR3pEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLElBQWdCLEVBQUUsTUFBeUI7SUFDdEUsTUFBTSxVQUFVLEdBQUcsc0NBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsT0FBTyxNQUFNLElBQUksSUFBSTtRQUNuQixDQUFDLENBQUMsVUFBVTtRQUNaLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxVQUFVO1lBQzlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBQSxrQkFBVyxFQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLElBQUEsa0JBQVcsRUFBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQVBELG9DQU9DIn0=