import React from "react";
import "../styles/main.css"
import HeaderBar from "../components/HeaderBar";
import NaviBar from "../components/NaviBar";
import ContentCard from "../components/ContentCard";

const HomeContainer = (props) => {
	return (
		<div className="content">
			<HeaderBar/>
			<NaviBar/>
			<ContentCard/>
		</div>
	);
};

export default HomeContainer;