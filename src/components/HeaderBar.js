import React from "react";
import {Divider, Segment, Button, Icon} from "semantic-ui-react";

const HeaderBar = (props) => {

	const iconSize = "large";
	const buttonSize = "small";

	return (
		<div>
			<h2>JAKRIN JUANGBHANICH</h2>
			<p>Welcome to my portfolio site. Here is where you can find all of my good shit.</p>

			<Button compact circular icon color="gray" size={buttonSize}>
				<Icon size={iconSize} name='github' />
			</Button>
			<Button compact circular icon color="gray" size={buttonSize}>
				<Icon size={iconSize} name='linkedin' />
			</Button>
			<Button compact circular icon color="gray" size={buttonSize}>
				<Icon size={iconSize} name='mail' />
			</Button>

			<Divider/>
		</div>
	);
};

export default HeaderBar;