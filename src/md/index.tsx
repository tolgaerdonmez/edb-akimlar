import css from "./markdown.module.scss";
import kaynakca from "./kaynakca.mdx";
import klasisizm from "./klasisizm.mdx";
import realizm from "./realizm.mdx";
import naturalizm from "./naturalizm.mdx";
import fütürizm from "./fütürizm.mdx";
import ekspresyonizm from "./ekspresyonizm.mdx";
import empresyonizm from "./empresyonizm.mdx";
import parnasizm from "./parnasizm.mdx";
import romantizm from "./romantizm.mdx";
import sembolizm from "./sembolizm.mdx";
import sürrealizm from "./sürrealizm.mdx";
import egzistanyalizm from "./egzistanyalizm.mdx";

const articles: { [key: string]: React.VFC } = {
  kaynakca,
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
  egzistanyalizm,
};

interface ArticleProps {
  name: string;
}

export function Article({ name }: ArticleProps) {
  let A = articles[name.toLocaleLowerCase()];
  if (!A) A = realizm;

  return (
    <div className={css.markdown}>
      <A />
    </div>
  );
}
