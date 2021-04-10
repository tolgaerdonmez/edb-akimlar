import React, { HTMLProps, ReactElement } from "react";
import "../styles/components/Avatar.scss";

interface IProps {
	title?: string;
}

type Props = HTMLProps<HTMLImageElement> & IProps;

export function Avatar({ src, title, alt }: Props): ReactElement {
	return (
		<div className="avatarContainer">
			<img src={src} alt={title || alt} />
			{title ? <p className="title">{title}</p> : null}
		</div>
	);
}
