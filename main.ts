import { mkdirSync, writeFileSync } from "node:fs";

// Fridge Roast: One Line, Biggest Laugh
// One line roasting a smart fridge: the fridge's own app, its ice, and
// the pun that ties them together — "froze" does double duty.
const LINE =
  "I rated my fridge's ice one star in its app. It froze my account.";

// Gate from the competition rules: /output/entry.txt must be UTF-8,
// 1–200 characters, and not only whitespace. Fail hard instead of
// writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Invalid entry line: ${LINE.length} characters, ` +
      `must be 1–200 and not only whitespace.`,
  );
}

// Honour the runner's output directory when provided (same pattern as
// the Monday Morning Punchlines entry); fall back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE, "utf8");
