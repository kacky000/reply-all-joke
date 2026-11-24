import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A one-line office joke built on one specific, universal detail: the reply-all storm.
const joke =
  "I replied-all asking everyone to stop replying-all, and for one shining minute I was both the problem and the solution.";

const limit = 200;
if ([...joke].length > limit) throw new Error(`joke is ${[...joke].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
