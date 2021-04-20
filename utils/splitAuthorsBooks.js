const text = `Şık (1889)
İffet (1896)
Mutallâka (1898)
Mürebbiye (1899)
Bir Muadele-i Sevda (1899)
Metres (1900)
Tesadüf (1900)
Şıpsevdi (1911)
Nimetşinas (1911)
Kuyruklu Yıldız Altında Bir İzdivaç (1912)
Gulyabani (1913)
Cadı (1912)
Sevda Peşinde (1912)
Hayattan Sayfalar (1919)
Hakka Sığındık (1919)
Toraman (1919)
`;

const res = text.split("\n").map((s) => {
  let [key, data] = s.split("(");

  data = data && data.split(",").map((x) => x.trim(" "));
  key = key && key.trim(" ");

  return key;
  // return { name: key, books: data || [] };
});

console.log(JSON.stringify(res));
