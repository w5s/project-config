import { configDefaults } from 'vitest/config';
const defaultConfig = {
    test: configDefaults,
};
export const configDefaultMap = Object.freeze({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0QsTUFBTSxhQUFhLEdBQWU7SUFDaEMsSUFBSSxFQUFFLGNBQWM7Q0FDckIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUErQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hGLFdBQVcsRUFBRSxhQUFhO0lBQzFCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3JCLEdBQUcsYUFBYTtRQUNoQixLQUFLLEVBQUU7WUFDTCxHQUFHLGFBQWEsQ0FBQyxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsR0FBRyxFQUFFO2dCQUNILEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHO2dCQUMzQixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztnQkFDdEIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxVQUFVLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sS0FBSyxFQUFFO2FBQ3RHO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsY0FBYztvQkFDOUIsZUFBZSxFQUFFLElBQUk7aUJBQ3RCO2FBQ0Y7U0FDRjtLQUNtQixDQUFDO0NBQ3hCLENBQUMsQ0FBQyJ9