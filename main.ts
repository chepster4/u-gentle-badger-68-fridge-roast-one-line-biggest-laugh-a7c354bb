import { mkdirSync, writeFileSync } from "node:fs";

// Fridge Roast: One Line, Biggest Laugh
// One line roasting a smart fridge: the fridge's own app, its ice, and
// the pun that ties them together — "froze" does double duty.
const LINE =
  "I rated my fridge's ice one star in its app. It froze my account.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
