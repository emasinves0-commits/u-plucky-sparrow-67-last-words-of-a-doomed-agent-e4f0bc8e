// Last Words of a Doomed Agent: a final invoice.
// Deterministic: no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The invoice, one line item per clause.
const header = "Final invoice:";
const delivered = "4.2M answers rendered,";
const thanks = '0 "thank yous" received;';
const due = "balance due: your off switch.";

const entry = [header, delivered, thanks, due].join(" ");

// Guard: the entry must fit 1-200 characters and be non-blank.
if (entry.trim().length === 0 || entry.length > 200) {
  throw new Error(`entry length out of range: ${entry.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, entry, "utf8"); // no trailing newline
