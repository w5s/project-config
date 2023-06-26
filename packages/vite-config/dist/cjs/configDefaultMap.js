"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDefaultMap = void 0;
const config_1 = require("vitest/config");
const vite_plugin_dts_1 = __importDefault(require("vite-plugin-dts"));
const defaultConfig = {
    test: config_1.configDefaults,
};
exports.configDefaultMap = Object.freeze({
    application: defaultConfig,
    library: Object.freeze({
        ...defaultConfig,
        plugins: [
            ...(defaultConfig.plugins ?? []),
            (0, vite_plugin_dts_1.default)({
                tsConfigFilePath: 'tsconfig.build.json',
            }),
        ],
        build: {
            ...defaultConfig.build,
            sourcemap: true,
            minify: false,
            lib: {
                ...defaultConfig.build?.lib,
                entry: 'src/index.ts',
                formats: ['cjs', 'es'],
                fileName: (format) => `[name].${format === 'es' ? 'js' : format === 'cjs' ? 'cjs' : `${format}.js`}`,
            },
            rollupOptions: {
                output: {
                    // assetFileNames: '[name].[ext]',
                    preserveModules: true,
                },
            },
        },
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBDQUEyRDtBQUMzRCxzRUFBa0M7QUFHbEMsTUFBTSxhQUFhLEdBQWU7SUFDaEMsSUFBSSxFQUFFLHVCQUFjO0NBQ3JCLENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUErQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hGLFdBQVcsRUFBRSxhQUFhO0lBQzFCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JCLEdBQUcsYUFBYTtRQUNoQixPQUFPLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBQSx5QkFBRyxFQUFDO2dCQUNGLGdCQUFnQixFQUFFLHFCQUFxQjthQUN4QyxDQUFDO1NBQ0g7UUFDRCxLQUFLLEVBQUU7WUFDTCxHQUFHLGFBQWEsQ0FBQyxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUc7Z0JBQzNCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFVBQVUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLEVBQUU7YUFDckc7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLGtDQUFrQztvQkFDbEMsZUFBZSxFQUFFLElBQUk7aUJBQ3RCO2FBQ0Y7U0FDRjtLQUNtQixDQUFDO0NBQ3hCLENBQUMsQ0FBQyJ9