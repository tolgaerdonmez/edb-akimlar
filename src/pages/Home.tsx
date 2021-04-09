import "../styles/pages/home.scss";
import { Button } from "../components/Button";
import React from "react";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="heroContainer">
			<h2 className="heroTopHeader">Bir edebiyat yolculuğu...</h2>
			<h1 className="heroHeader">AKIMLAR</h1>
			<Button className="buttonOutlined" to="/akimlar">
				Keşfet
			</Button>
		</div>
	);
}
