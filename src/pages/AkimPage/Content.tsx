import { useEffect, useRef, useState } from "preact/hooks";
import { Avatar } from "../../components/Avatar";
import { ArrowBack } from "../../components/icons/ArrowBack";
import { Author } from "../../typings/akim";
import { getFilenameFromName } from "../../utils/path";
import { Article } from "../../md";
import React from "react";

interface Props {
  name: string;
  authors: Author[];
}

export function Content({ name, authors }: Props): React.ReactElement {
  const [selectedAuthor, setSelectedAuthor] = useState(-1);
  const showAuthors = authors.length > 0;

  useEffect(() => {
    setSelectedAuthor(-1);
  }, [name]);

  let listComponent;

  if (!showAuthors) listComponent = null;
  else if (selectedAuthor < 0)
    listComponent = (
      <ul className="authors horizontalList" key={"authors" + name}>
        {authors.map(({ name, books }, i) => (
          <li key={name + i.toString()}>
            <Avatar
              onClick={books.length > 0 ? () => setSelectedAuthor(i) : undefined}
              title={name}
              src={`/img/authors/${getFilenameFromName(name)}.jpg`}
            />
          </li>
        ))}
      </ul>
    );
  else
    listComponent = (
      <ul className="books horizontalList" key={"books" + authors[selectedAuthor].name}>
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
              fallbackSrc={`/img/authors/${getFilenameFromName(authors[selectedAuthor].name)}.jpg`}
              title={book}
              shape="rect"
            />
          </li>
        ))}
      </ul>
    );

  return (
    <div className="content">
      <div className="info">
        <Article name={name} />
      </div>
      {listComponent}
    </div>
  );
}
