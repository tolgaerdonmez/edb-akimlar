const Axios = require("axios");
const { createWriteStream } = require("fs");
const { akimlar } = require("../src/data/data.json");
const url = "https://www.googleapis.com/books/v1/volumes";
// Download covers of books here

// Change the zoom=1 in thumbnail url to zoom=0 for bigger image;
function getBigImage(url) {
  return url.replace("zoom=1", "zoom=0");
}

async function downloadImage(name) {
  try {
    const { data } = await Axios.get(url, { params: { q: name } });
    try {
      const res = await Axios.get(getBigImage(data.items[0].volumeInfo.imageLinks.thumbnail), {
        responseType: "stream",
      });
      const writer = createWriteStream(`./public/img/new/${name.replace(/\s/g, "")}.jpg`);
      res.data.pipe(writer);
      return true;
    } catch {
      console.log(name + " no thumbnail ");
      return false;
    }
  } catch (err) {
    console.error(name + " " + err);
    return false;
  }
}
async function main() {
  /**
   * @type {Promise<any>[]}
   */
  const pss = [];
  const authors = [
    { name: "Fritz von Unruh", books: ["Offiziere", "Ein Geschlecht", "Platz"] },
    { name: "Ernst Toller", books: ["Masses and Man", "Brokenbow", "Hoppla! Such Is Life!", "Pastor Hall"] },
    { name: "Georg Kaiser", books: ["Von morgens bis mitternachts", "Der Silbersee"] },
    { name: "James Joyce", books: ["Ulysses", "Dubliners"] },
    { name: "Reinhard Johannes Sorge", books: ["Der Bettler"] },
  ];
  for (const { books } of authors) {
    for (const book of books) {
      pss.push(downloadImage(book));
    }
  }
  // for (const { authors } of akimlar) {
  //   if (!authors) continue;

  //   for (const { books } of authors) {
  //     for (const book of books) {
  //       pss.push(downloadImage(book));
  //     }
  //   }
  // }
  await Promise.all(pss);
}
main();
