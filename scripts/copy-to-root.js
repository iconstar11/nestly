import { cp, rm, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const ASSETS_ROOT = join(ROOT, 'assets');
const SRC_INDEX = join(ROOT, 'src', 'index.html');
const ROOT_INDEX = join(ROOT, 'index.html');

// Remove old assets dir in root (from previous build)
try { await rm(ASSETS_ROOT, { recursive: true }); } catch {}

// Copy all files from dist to root
const entries = await readdir(DIST);
for (const entry of entries) {
  await cp(join(DIST, entry), join(ROOT, entry), { recursive: true });
}

// Restore source index.html so dev server works after build.
// The built index.html at root is the one committed for GitHub Pages.
// To go back to dev mode, run: cp src/index.html index.html
process.stdout.write('Copied dist/ to root.\n');
process.stdout.write('Run `cp src/index.html index.html` to restore dev entry point.\n');
