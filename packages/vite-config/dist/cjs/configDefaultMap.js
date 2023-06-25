"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDefaultMap = void 0;
const config_1 = require("vitest/config");
const defaultConfig = {
    test: config_1.configDefaults,
};
exports.configDefaultMap = Object.freeze({
    application: defaultConfig,
    library: Object.freeze({
        ...defaultConfig,
        build: {
            ...defaultConfig.build,
            sourcemap: true,
            lib: {
                ...defaultConfig.build?.lib,
                entry: 'src/index.ts',
                formats: ['cjs', 'es'],
                fileName: (format) => `[name].${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : `${format}.js`}`,
            },
            rollupOptions: {
                output: {
                    assetFileNames: '[name].[ext]',
                    preserveModules: true,
                },
            },
        },
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUEyRDtBQUczRCxNQUFNLGFBQWEsR0FBZTtJQUNoQyxJQUFJLEVBQUUsdUJBQWM7Q0FDckIsQ0FBQztBQUVXLFFBQUEsZ0JBQWdCLEdBQStDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEYsV0FBVyxFQUFFLGFBQWE7SUFDMUIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDckIsR0FBRyxhQUFhO1FBQ2hCLEtBQUssRUFBRTtZQUNMLEdBQUcsYUFBYSxDQUFDLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUc7Z0JBQzNCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFVBQVUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLEVBQUU7YUFDdEc7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLGNBQWMsRUFBRSxjQUFjO29CQUM5QixlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRjtTQUNGO0tBQ21CLENBQUM7Q0FDeEIsQ0FBQyxDQUFDIn0=