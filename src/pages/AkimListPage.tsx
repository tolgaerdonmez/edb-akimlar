import React, { ReactElement } from "react";
import "../styles/pages/AkimListPage.scss";
import { akimlar } from "../data.json";
import { Avatar } from "../components/Avatar";

interface Props {}

export function AkimListPage({}: Props): ReactElement {
	return (
		<div className="akimPageContainer">
			<div className="sidebar">
				{akimlar.map(({ name }) => (
					<>
						<div className="seperator"></div>
						<div>
							<p>{name}</p>
						</div>
					</>
				))}
			</div>
			<div className="content">
				<div className="info">
					<h1>{akimlar[0].name}</h1>
					{akimlar[0].content?.map(c => (
						<p>{c}</p>
					))}
				</div>
				<ul className="authors">
					{akimlar[0].authors?.map(({ name }) => (
						<li>
							<Avatar title={name} src={`./img/${name?.replace(" ", "")}.jpg`} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
