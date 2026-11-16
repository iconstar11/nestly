// Vite uses the project-root index.html as its build entry (there is no
// `root: 'src'` in vite.config.js). The root file is normally the built
// output, so without this step the build would silently reuse stale SEO
// metadata from the last build. Sync the source template before building;
// copy-to-root.js restores the built output afterwards.
import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
await copyFile(join(ROOT, 'src', 'index.html'), join(ROOT, 'index.html'));
await copyFile(join(ROOT, 'src', 'partner.html'), join(ROOT, 'partner.html'));
process.stdout.write('Synced src/index.html and src/partner.html to root for build entry.\n');
