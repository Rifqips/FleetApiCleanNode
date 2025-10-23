import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { query } from '../src/config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const sqlPath = path.join(__dirname, 'migrations', '001_init.sql');
  const sql = fs.readFileSync(sqlPath, 'utf-8');
  console.log('Running migration 001_init.sql...');
  await query(sql);
  console.log('Migration done.');
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
