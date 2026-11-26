import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. I've sniffed his bag every morning for three years: paper, paper, never one treat, so I take his biscuit and still bark him off my gate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
