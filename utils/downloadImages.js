const { akimlar } = require("../src/data.json");
const { createWriteStream } = require("fs");
const Axios = require("axios").default;

const createUrl = name =>
	`http://tr.wikipedia.org/w/api.php?action=query&titles=${name}&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=400`;

async function main() {
	for (const { authors } of akimlar) {
		if (!authors) continue;

		for (const { name } of authors) {
			try {
				const reqUrl = createUrl(name);
				const response = await Axios.get(reqUrl);
				try {
					const res = await Axios.get(Object.values(response.data.query.pages)[0].thumbnail.source, {
						responseType: "stream",
					});
					const writer = createWriteStream(`./public/img/${name.replace(" ", "")}.jpg`);
					res.data.pipe(writer);
				} catch {
					console.log(name, "thumbnail", reqUrl);
				}
			} catch (err) {
				console.log(name, "err");
			}
		}
	}
}

main();
