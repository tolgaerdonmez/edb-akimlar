const { readdirSync, mkdirSync, copyFileSync } = require("fs");
const { join } = require("path");

const BASE_PATH = "./public/img/books_";
const DEST_PATH = "./public/img/renamed";

const removeSpecialChars = (name) => {
  /**
   * @type {[string,string]}
   */
  // const [n, format] = name.split(".");
  // console.log(name);
  return name.replace(/\s/g, ""); // + "." + format;
};

const files = readdirSync(BASE_PATH, { encoding: "utf-8" });
console.log(files);
try {
  mkdirSync(DEST_PATH);
} catch {}

files.forEach((filename) => {
  const n = removeSpecialChars(filename);
  // console.log(n);
  copyFileSync(join(BASE_PATH, filename), join(DEST_PATH, n));
});
