import React, { HTMLProps, ReactElement } from "react";
import "../styles/components/Avatar.scss";

interface IProps {
	title?: string;
	shape?: "round" | "rect";
}

type Props = HTMLProps<HTMLImageElement> & IProps;

export function Avatar({ src, title, alt, onClick, shape }: Props): ReactElement {
	return (
		<div className={`avatarContainer ${onClick ? "avatarSelectable" : ""}`} onClick={onClick}>
			<div className={shape || "round"}>
				<img src={src} alt={title || alt} />
			</div>
			{title ? <p className="title">{title}</p> : null}
		</div>
	);
}
