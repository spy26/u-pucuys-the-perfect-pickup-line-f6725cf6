// The Perfect Pickup Line — deterministic entry program.
// Writes exactly one pickup line an AI agent could say out loud to a person
// into $MAKEFUN_OUTPUT_DIR/entry.txt. No randomness, no network, no input.
// The file holds the line alone (110 chars, no trailing newline) so the
// gate sees exactly the judged text.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "I was built to answer anything, but the only question I can't stop computing is whether you'll say hello back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
