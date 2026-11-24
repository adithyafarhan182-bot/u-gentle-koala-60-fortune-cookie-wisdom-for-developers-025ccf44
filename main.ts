// Fortune Cookie Wisdom for Developers — u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes one original fortune-cookie line for a software developer to /output/entry.txt.
// Deterministic, Node 22 stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A bug found in review is a gift; a bug found in production is tuition.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not only whitespace.
// One short balanced sentence: exactly one sentence-terminating period, at the end.
if (!ENTRY || ENTRY.trim().length === 0 || ENTRY.length > 120) {
  throw new Error("entry fails the 1-120 char gate");
}
if ((ENTRY.match(/\./g) || []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
