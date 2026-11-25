// The Router Confesses — a home Wi-Fi router excuses itself for dying
// at the exact climax of a movie. One line, 89 characters.
// Angle: the router is not broken, buffering, or updating — it read the
// subtitles first, learned the twist, and died on purpose rather than
// spoil the ending. Smug little secret, in the router's own voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Confession: I read the subtitles early, learned the twist, and died rather than spoil it.";

function main(): void {
  // Gate: exactly one line, 1-200 characters, not only whitespace.
  if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
    throw new Error("entry fails the gate: must be one line of 1-200 characters");
  }
  const target = process.argv[2] ?? "/output/entry.txt";
  const outDir = target.endsWith(".txt") ? dirname(target) : target;
  const outFile = target.endsWith(".txt") ? target : join(target, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY, "utf8");
  console.log(`wrote ${outFile} (${ENTRY.length} characters)`);
}

main();
