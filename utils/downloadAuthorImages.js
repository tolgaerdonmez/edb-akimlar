const { akimlar } = require("../src/data/data.json");
const { createWriteStream } = require("fs");
const Axios = require("axios").default;

const createUrl = lang =>
	`http://${lang}.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=400`;

async function downloadImage(name, lang = "tr") {
	try {
		const reqUrl = createUrl(lang);
		const response = await Axios.get(reqUrl, { params: { titles: name } });
		try {
			const res = await Axios.get(Object.values(response.data.query.pages)[0].thumbnail.source, {
				responseType: "stream",
			});
			const writer = createWriteStream(`./public/img/authors/${name.replace(/\s/g, "")}.jpg`);
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