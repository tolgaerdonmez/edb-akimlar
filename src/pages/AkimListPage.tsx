import React, { ReactElement } from "react";
import "../styles/pages/AkimListPage.scss";
import { akimlar } from "../data.json";

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
				<h1>Realizm</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci nobis delectus iusto
					corporis neque consequatur, similique architecto labore ut? Cum veniam nam at explicabo doloremque,
					repudiandae totam asperiores eius.
				</p>
			</div>
		</div>
	);
}
