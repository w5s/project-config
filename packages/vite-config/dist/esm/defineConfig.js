import { configDefaultMap } from './configDefaultMap.js';
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param getConfig - the application custom configuration
 */
export function defineConfig(type, getConfig) {
    const baseConfig = configDefaultMap[type];
    return getConfig == null ? baseConfig : getConfig(baseConfig);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmluZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUd6RDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBZ0IsRUFBRSxTQUFxRDtJQUNsRyxNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxPQUFPLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMifQ==