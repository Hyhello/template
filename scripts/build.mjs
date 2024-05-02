import { build } from "esbuild";

// 构建
build({
    entryPoints: ['src/index.ts'],
    outfile: 'lib/index.cjs',
    bundle: true,
    minify: true,
    target: 'node10',
    platform: 'node'
})
