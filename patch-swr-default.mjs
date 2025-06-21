import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Corrected path
const swrPath = path.join(__dirname, 'node_modules', 'swr', 'dist', 'index', 'index.js');

if (!existsSync(swrPath)) {
  console.error('❌ Cannot find SWR index file. Checked:', swrPath);
  process.exit(1);
}

try {
  let content = await readFile(swrPath, 'utf-8');

  if (!content.includes('export default useSWR')) {
    content += '\nexport default useSWR;\n';
    await writeFile(swrPath, content, 'utf-8');
    console.log('✅ Patched SWR: default export added.');
  } else {
    console.log('✅ SWR already patched.');
  }
} catch (err) {
  console.error('❌ Failed to patch SWR:', err);
  process.exit(1);
}
