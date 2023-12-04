"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDefaultMap = void 0;
const config_1 = require("vitest/config");
const vite_plugin_dts_1 = __importDefault(require("vite-plugin-dts"));
const defaultConfig = {
    test: { ...config_1.configDefaults },
};
exports.configDefaultMap = {
    application: defaultConfig,
    library: {
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBDQUEyRDtBQUMzRCxzRUFBa0M7QUFHbEMsTUFBTSxhQUFhLEdBQWU7SUFDaEMsSUFBSSxFQUFFLEVBQUUsR0FBRyx1QkFBYyxFQUFFO0NBQzVCLENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUErQztJQUMxRSxXQUFXLEVBQUUsYUFBYTtJQUMxQixPQUFPLEVBQUU7UUFDUCxHQUFHLGFBQWE7UUFDaEIsT0FBTyxFQUFFO1lBQ1AsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUEseUJBQUcsRUFBQztnQkFDRixZQUFZLEVBQUUscUJBQXFCO2FBQ3BDLENBQUM7U0FDSDtRQUNELEtBQUssRUFBRTtZQUNMLEdBQUcsYUFBYSxDQUFDLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRTtnQkFDSCxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRztnQkFDM0IsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssRUFBRTthQUNyRztZQUNELGFBQWEsRUFBRTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sa0NBQWtDO29CQUNsQyxlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRjtTQUNGO0tBQ21CO0NBQ3ZCLENBQUMifQ==