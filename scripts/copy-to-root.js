import { cp, rm, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const ASSETS_ROOT = join(ROOT, 'assets');

// Remove old assets dir in root (from previous build)
try { await rm(ASSETS_ROOT, { recursive: true }); } catch {}

// Copy all files from dist to root
const entries = await readdir(DIST);
for (const entry of entries) {
  await cp(join(DIST, entry), join(ROOT, entry), { recursive: true });
}

console.log('Copied dist/ to root. clients/, template/, generate.py untouched.');
