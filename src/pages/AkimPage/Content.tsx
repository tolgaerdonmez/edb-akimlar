import React, { ReactElement } from "react";
import { Avatar } from "../../components/Avatar";
import { Akim } from "../../typings/akim";
import { getAuthorImagePath } from "../../utils/path";

type Props = Akim;

export function Content({ name, content, authors }: Props): ReactElement {
	return (
		<div className="content">
			<div className="info">
				<h1>{name}</h1>
				{content.map(c => (
					<p>{c}</p>
				))}
			</div>
			<ul className="authors">
				{authors.map(({ name }) => (
					<li>
						<Avatar title={name} src={`/img/${getAuthorImagePath(name)}.jpg`} />
					</li>
				))}
			</ul>
		</div>
	);
}
