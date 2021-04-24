const { writeFileSync } = require("fs");
const { akimlar } = require("../src/data");

const l = "";

akimlar.forEach(({ authors }) => authors.forEach(({ name, books }) => books.forEach((b) => (l += `${name} - ${b}\n`))));

writeFileSync("./src/data/books.txt", l);
