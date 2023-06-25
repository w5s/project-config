"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineConfig = void 0;
const config_1 = require("vitest/config");
const configDefaultMap_js_1 = require("./configDefaultMap.js");
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param config - the application custom configuration
 */
function defineConfig(type, config) {
    const baseConfig = configDefaultMap_js_1.configDefaultMap[type];
    return config == null ? baseConfig : (0, config_1.mergeConfig)(baseConfig, config);
}
exports.defineConfig = defineConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmluZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQ0FBbUU7QUFDbkUsK0RBQXlEO0FBR3pEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLElBQWdCLEVBQUUsTUFBeUI7SUFDdEUsTUFBTSxVQUFVLEdBQUcsc0NBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUEsb0JBQVcsRUFBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUhELG9DQUdDIn0=