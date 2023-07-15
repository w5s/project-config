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
                tsconfigPath: 'tsconfig.build.json',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBDQUEyRDtBQUMzRCxzRUFBa0M7QUFHbEMsTUFBTSxhQUFhLEdBQWU7SUFDaEMsSUFBSSxFQUFFLHVCQUFjO0NBQ3JCLENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUErQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hGLFdBQVcsRUFBRSxhQUFhO0lBQzFCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JCLEdBQUcsYUFBYTtRQUNoQixPQUFPLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBQSx5QkFBRyxFQUFDO2dCQUNGLFlBQVksRUFBRSxxQkFBcUI7YUFDcEMsQ0FBQztTQUNIO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsR0FBRyxhQUFhLENBQUMsS0FBSztZQUN0QixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFO2dCQUNILEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHO2dCQUMzQixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztnQkFDdEIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxVQUFVLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sS0FBSyxFQUFFO2FBQ3JHO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixrQ0FBa0M7b0JBQ2xDLGVBQWUsRUFBRSxJQUFJO2lCQUN0QjthQUNGO1NBQ0Y7S0FDbUIsQ0FBQztDQUN4QixDQUFDLENBQUMifQ==