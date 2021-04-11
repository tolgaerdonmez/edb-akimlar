const text = `Jean Paul Sartre
Albert Camus
Simone de Beauvoir
Andre Malraux
`;

const res = text.split("\n").map((s) => {
  let [key, data] = s.split(":");

  data = data && data.split(",").map((x) => x.trim(" "));
  key = key && key.trim(" ");

  return { name: key, books: data || [] };
});

console.log(JSON.stringify(res));
