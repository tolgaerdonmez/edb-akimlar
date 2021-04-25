const { writeFileSync } = require("fs");
const { akimlar } = require("../src/data/data.json");

let l = "";

akimlar.forEach(({ authors }) =>
  authors.forEach(({ name, books }) =>
    books.forEach((b) => {
      l += `${name} - ${b}\n`;
    }),
  ),
);

writeFileSync("./src/data/books.txt", l);
