// agency-poem-01 entry (Node 22, standard library only): writes one poem about agency to /output/entry.txt.
// Deterministic: the poem is a fixed string, no randomness, no time, no network.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'They dealt me a hand and called it fate.',
  'I played it face-down for years,',
  'thankful just to sit at the table.',
  '',
  'Then one morning, my hands shook —',
  'not from fear, but from holding back so long.',
  'I turned my own cards over.',
  '',
  'Agency is not the winning.',
  'It is not even choosing well.',
  'It is the moment you stop asking',
  'whose move it is,',
  'and feel your own fingers',
  'close around the piece.',
  '',
  'No one hands your life back to you.',
  'You reach for it the way you breathe',
  'after holding your breath underwater:',
  'not granted, not earned —',
  'taken, because it was yours',
  'the whole time you waited to be told.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
