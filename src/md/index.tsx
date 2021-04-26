import klasisizm from "./klasisizm.md";
import realizm from "./realizm.md";
import naturalizm from "./naturalizm.md";
import fütürizm from "./fütürizm.md";
import ekspresyonizm from "./ekspresyonizm.md";
import empresyonizm from "./empresyonizm.md";
import parnasizm from "./parnasizm.md";
import romantizm from "./romantizm.md";
import sembolizm from "./sembolizm.md";
import sürrealizm from "./sürrealizm.md";

export const articles: { [key: string]: React.VFC } = {
  klasisizm,
  naturalizm,
  fütürizm,
  ekspresyonizm,
  empresyonizm,
  parnasizm,
  romantizm,
  sembolizm,
  sürrealizm,
  realizm,
};

export function loadArticle(name: string) {
  const a = articles[name.toLocaleLowerCase()];
  if (!a) return realizm;
  return a;
}
