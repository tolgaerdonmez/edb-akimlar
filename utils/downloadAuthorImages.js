const { akimlar } = require("../src/data/data.json");
const { createWriteStream, mkdirSync } = require("fs");
const Axios = require("axios").default;

const getFilenameFromName = (name) => name.replace(/\s/g, ""); //.replace(/[^a-zA-Z ]/g, "");

const createUrl = (lang) =>
  `http://${lang}.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=400`;

async function downloadImage(name, lang = "tr") {
  try {
    const reqUrl = createUrl(lang);
    const response = await Axios.get(reqUrl, { params: { titles: name } });
    try {
      const res = await Axios.get(Object.values(response.data.query.pages)[0].thumbnail.source, {
        responseType: "stream",
      });
      const writer = createWriteStream(`./public/img/new/${getFilenameFromName(name)}.jpg`);
      res.data.pipe(writer);
      return true;
    } catch {
      console.log(name + " no thumbnail " + lang);
      return false;
    }
  } catch (err) {
    console.error(name + " " + JSON.stringify(err));
    return false;
  }
}

async function main() {
  try {
    mkdirSync("./public/img/new");
  } catch {}
  for (const { authors } of akimlar) {
    if (!authors) continue;

    for (const { name } of authors) {
      let res = await downloadImage(name);
      if (!res) {
        res = await downloadImage(name, "en");
      }
    }
  }
}

main();
