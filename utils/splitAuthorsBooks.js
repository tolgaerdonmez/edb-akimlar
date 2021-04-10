const text = `Stendhal: Kırmızı ve Siyah, Parma Manastırı
Balzac : Vadideki Zambak, Eugenie Grandet, Goriot Baba Gustave Flaubert: Madam Bovary
Charles Dickens: Oliver Twist, David Copperfield
Gogol: Ölü Canlar, Müfettiş
Dostoyevski: Suç ve Ceza, Karamazof Kardeşler, Budala Tolstoy: Savaş ve Barış, Anna Karanina
Mark Twain : Tom Sawyer'in Maceraları
Anton Çehov: Vanya Dayı, Vişne Bahçesi
Ernest Hemingway: Çanlar Kimin İçin Çalıyor?
John Steinbeck: Gazap Üzümleri
Herman Melville: Moby Dick
`;

const res = text.split("\n").map(s => {
	let [key, data] = s.split(":");
	if (!key | !data) {
		return {};
	}

	data = data.split(",").map(x => x.trim(" "));
	key = key.trim(" ");

	return { name: key, books: data };
});

console.log(JSON.stringify(res));
