import { mergeConfig } from 'vite';
import { configDefaultMap } from './configDefaultMap.js';
/**
 * Return a new configuration for `type`
 *
 * @param type - the project archetype
 * @param config - the application custom configuration
 */
export function defineConfig(type, config) {
    const baseConfig = configDefaultMap[type];
    return config == null
        ? baseConfig
        : typeof config === 'function'
            ? (configEnv) => mergeConfig(baseConfig, config(configEnv))
            : mergeConfig(baseConfig, config);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmluZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3pEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFnQixFQUFFLE1BQXlCO0lBQ3RFLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE9BQU8sTUFBTSxJQUFJLElBQUk7UUFDbkIsQ0FBQyxDQUFDLFVBQVU7UUFDWixDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssVUFBVTtZQUM5QixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMifQ==