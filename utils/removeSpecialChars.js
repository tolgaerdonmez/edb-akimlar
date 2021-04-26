const { readdirSync, mkdirSync, copyFileSync } = require("fs");
const { join } = require("path");

const BASE_PATH = "./public/img/authors_";
const DEST_PATH = "./public/img/renamed";

const removeSpecialChars = (name) => {
  const [n, format] = name.split(".");
  return n.replace(/\s/g, "").replace(/[^a-zA-Z]/g, "") + "." + format;
};

const files = readdirSync(BASE_PATH);

try {
  mkdirSync(DEST_PATH);
} catch {}

files.forEach((filename) => {
  const n = removeSpecialChars(filename);
  copyFileSync(join(BASE_PATH, filename), join(DEST_PATH, n));
});
