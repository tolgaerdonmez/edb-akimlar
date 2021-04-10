import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { akimlar } from "../../data";

interface Props {
	currentAkim: string;
}

export function Sidebar({ currentAkim }: Props): ReactElement {
	return (
		<div className="sidebar">
			{akimlar.map(({ name }) => (
				<>
					<div className="seperator"></div>
					<div>
						<Button
							className={`navigateButton 
								${currentAkim === name ? "navigateButtonSelected" : ""}`}
							to={`/akimlar/${name.toLowerCase()}`}>
							{name}
						</Button>
					</div>
				</>
			))}
		</div>
	);
}
