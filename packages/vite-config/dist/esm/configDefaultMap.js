import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';
const defaultConfig = {
    test: { ...configDefaults },
};
export const configDefaultMap = {
    application: defaultConfig,
    library: {
        ...defaultConfig,
        plugins: [
            ...(defaultConfig.plugins ?? []),
            dts({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRGVmYXVsdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWdEZWZhdWx0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxHQUFHLE1BQU0saUJBQWlCLENBQUM7QUFHbEMsTUFBTSxhQUFhLEdBQWU7SUFDaEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxjQUFjLEVBQUU7Q0FDNUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUErQztJQUMxRSxXQUFXLEVBQUUsYUFBYTtJQUMxQixPQUFPLEVBQUU7UUFDUCxHQUFHLGFBQWE7UUFDaEIsT0FBTyxFQUFFO1lBQ1AsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2hDLEdBQUcsQ0FBQztnQkFDRixZQUFZLEVBQUUscUJBQXFCO2FBQ3BDLENBQUM7U0FDSDtRQUNELEtBQUssRUFBRTtZQUNMLEdBQUcsYUFBYSxDQUFDLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRTtnQkFDSCxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRztnQkFDM0IsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssRUFBRTthQUNyRztZQUNELGFBQWEsRUFBRTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sa0NBQWtDO29CQUNsQyxlQUFlLEVBQUUsSUFBSTtpQkFDdEI7YUFDRjtTQUNGO0tBQ21CO0NBQ3ZCLENBQUMifQ==