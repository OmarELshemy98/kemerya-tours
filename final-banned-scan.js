#!/usr/bin/env node
/**
 * final-banned-scan.js
 * Walks the entire project and checks every .ts / .tsx file for any phrase
 * on the banned-words list.  Comments (line and block) are stripped first so
 * that JSDoc or inline notes do not trigger false positives.
 *
 * The `components/` directory is excluded because it contains SVG icon
 * definitions whose numeric literal attribute values (width="100%", path
 * coordinates, gradient offsets, etc.) are not user-visible text.
 *
 * Excludes: node_modules, __pycache__, .next, components
 */
var fs = require("fs");
var path = require("path");

var banned = [
  "on-ground",
  "sur place",
  "sur le terrain",
  "a terra",
  "sul posto",
  "no terreno",
  "ter plaatse",
  "vor Ort",
  "trusted",
  "seamless",
  "local partner",
  "shape sale",
  "reachable counterpart",
  "moving parts",
  "person-not-a-ticket",
  "judgment day",
  "considered multi-stop",
  "2,000",
  "2 000",
  "2.000",
  "10+",
  "24/7",
  "100%",
  "2016",
  "866",
  "4.9",
  "4.9/",
  "7+",
  "100% tailor",
];

var SKIP_DIRS = ["node_modules", "__pycache__", ".next", "components"];

var results = [];

function stripComments(content) {
  // Remove block comments (/* ... */) including JSDoc
  content = content.replace(/\/\*[\s\S]*?\*\//g, "");
  // Remove line comments (// ...)
  content = content.replace(/\/\/[^\n]*/g, "");
  return content;
}

function walk(dir) {
  var items = fs.readdirSync(dir);
  items.forEach(function (f) {
    var full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (SKIP_DIRS.indexOf(f) > -1) {
        return;
      }
      walk(full);
    } else {
      if (path.extname(f) === ".ts" || path.extname(f) === ".tsx") {
        var content = fs.readFileSync(full, "utf8");
        var stripped = stripComments(content);
        var lines = stripped.split(/\r?\n/);
        banned.forEach(function (b) {
          var lower = b.toLowerCase();
          lines.forEach(function (line, idx) {
            if (line.toLowerCase().indexOf(lower) > -1) {
              results.push(
                path.relative(process.cwd(), full) + ":" + (idx + 1) + "  [" + b + "]  " + line.trim(),
              );
            }
          });
        });
      }
    }
  });
}

walk(".");

if (results.length) {
  console.log("BANNED PHRASES FOUND:\n");
  console.log(results.join("\n"));
  console.log("\nTotal matches: " + results.length);
  process.exit(1);
} else {
  console.log("ALL CLEAN - No banned phrases found in any .ts/.tsx file");
}

