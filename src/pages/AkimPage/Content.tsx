import { useEffect, useState } from "preact/hooks";
import { Avatar } from "../../components/Avatar";
import { ArrowBack } from "../../components/icons/ArrowBack";
import { Akim } from "../../typings/akim";
import { getFilenameFromName } from "../../utils/path";
import { loadArticle } from "../../md";

type Props = Akim;

export function Content({ name, authors }: Props): React.ReactElement {
  const [selectedAuthor, setSelectedAuthor] = useState(-1);

  const Article = loadArticle(name);

  useEffect(() => {
    setSelectedAuthor(-1);
  }, [name]);

  return (
    <div className="content">
      <div className="info">
        <Article />
      </div>
      {selectedAuthor < 0 ? (
        <ul className="authors horizontalList">
          {authors.map(({ name }, i) => (
            <li key={name + i.toString()}>
              <Avatar
                onClick={() => setSelectedAuthor(i)}
                title={name}
                src={`/img/authors/${getFilenameFromName(name)}.jpg`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="books horizontalList">
          <li id="booksBack">
            <p>{authors[selectedAuthor].name}</p>
            <ArrowBack fill="white" size={50} onClick={() => setSelectedAuthor(-1)} />
          </li>
          <li id="authorAvatar">
            <Avatar
              title={authors[selectedAuthor].name}
              src={`/img/authors/${getFilenameFromName(authors[selectedAuthor].name)}.jpg`}
            />
          </li>
          {authors[selectedAuthor].books.map((book, i) => (
            <li key={book + i.toString()}>
              <Avatar
                src={`/img/books/${getFilenameFromName(book)}.jpg`}
                fallbackSrc="/img/books/empty.jpg"
                title={book}
                shape="rect"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
