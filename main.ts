import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Controls the ocean, answers to no one, and has never once apologised for the werewolves.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt: ${LINE}`);
