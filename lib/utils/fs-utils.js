import fs from "fs";

export function loadJSON(filepath) {
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

export function saveJSON(filepath, data) {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
}
