import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("src");
const files = [];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(fullPath);
    else files.push(fullPath);
  }
}

await collect(root);
const offenders = [];
for (const file of files) {
  const content = await readFile(file, "utf8");
  if (content.includes("—")) offenders.push(path.relative(process.cwd(), file));
}

if (offenders.length > 0) {
  console.error(`Em dash found in src/: ${offenders.join(", ")}`);
  process.exit(1);
}
