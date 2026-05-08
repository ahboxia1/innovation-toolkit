#!/usr/bin/env node

/**
 * preview.mjs
 * Opens a generated pitch HTML file in the default browser.
 *
 * Usage:
 *   node scripts/preview.mjs pitch-output.html
 *   node scripts/preview.mjs ../pitch-AI会议纪要助手.html
 */

import { exec } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

const filePath = process.argv[2];

if (!filePath || filePath === '--help') {
  console.log('Usage: node preview.mjs <pitch-file.html>');
  process.exit(0);
}

const absPath = resolve(filePath);

if (!existsSync(absPath)) {
  console.error(`File not found: ${absPath}`);
  process.exit(1);
}

const platform = process.platform;
let command;

if (platform === 'win32') {
  command = `start "" "${absPath}"`;
} else if (platform === 'darwin') {
  command = `open "${absPath}"`;
} else {
  command = `xdg-open "${absPath}"`;
}

exec(command, (err) => {
  if (err) {
    console.error(`Failed to open browser: ${err.message}`);
    console.log(`Manual open: ${absPath}`);
    process.exit(1);
  }
  console.log(`Opened in browser: ${absPath}`);
});
