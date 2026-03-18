import { readFileSync } from 'node:fs';
import path from 'node:path';
function toInt(value) {
    if (value == null)
        return undefined;
    const parsed = Number.parseInt(value);
    return Number.isNaN(parsed) ? undefined : parsed;
}
export function withPackageDefine(config) {
    let packageJSON = undefined;
    const cwd = config.cwd ?? process.cwd();
    function getPackageJSON() {
        if (packageJSON)
            return packageJSON;
        try {
            packageJSON = JSON.parse(readFileSync(path.join(cwd, 'package.json'), 'utf8'));
            return packageJSON;
        }
        catch {
            return {};
        }
    }
    // Ensure we do not stringify undefined values
    function jsonSafeStringify(value) {
        return JSON.stringify(value);
    }
    return {
        ...config,
        cwd,
        define: {
            __PACKAGE_NAME__: jsonSafeStringify(process.env['npm_package_name'] ?? getPackageJSON().name ?? ''),
            __PACKAGE_VERSION__: jsonSafeStringify(process.env['npm_package_version'] ?? getPackageJSON().version ?? ''),
            __PACKAGE_BUILD_NUMBER__: jsonSafeStringify(toInt(process.env['npm_package_build_number']) ??
                toInt(process.env['BUILD_NUMBER']) ??
                toInt(process.env['CI_BUILD_NUMBER']) ??
                Date.now()),
            ...config.define,
        },
    };
}
