import React, { ReactElement, useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import { ArrowBack } from "../../components/icons/ArrowBack";
import { Akim } from "../../typings/akim";
import { getAuthorImagePath } from "../../utils/path";

type Props = Akim;

export function Content({ name, content, authors }: Props): ReactElement {
	const [selectedAuthor, setSelectedAuthor] = useState(-1);

	useEffect(() => {
		setSelectedAuthor(-1);
	}, [name]);

	return (
		<div className="content">
			<div className="info">
				<h1>{name}</h1>
				{content.map(c => (
					<p>{c}</p>
				))}
			</div>
			{selectedAuthor < 0 ? (
				<ul className="authors horizontalList">
					{authors.map(({ name }, i) => (
						<li>
							<Avatar
								onClick={() => setSelectedAuthor(i)}
								title={name}
								src={`/img/authors/${getAuthorImagePath(name)}.jpg`}
							/>
						</li>
					))}
				</ul>
			) : (
				<ul className="books horizontalList">
					<li>
						<ArrowBack fill="white" size={50} onClick={() => setSelectedAuthor(-1)} />
					</li>
					<li>
						<Avatar
							title={authors[selectedAuthor].name}
							src={`/img/authors/${getAuthorImagePath(authors[selectedAuthor].name)}.jpg`}
						/>
					</li>
					{authors[selectedAuthor].books.map(book => (
						<li>
							<Avatar src={`/img/books/cover.jpg`} title={book} shape="rect" />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
