import React from "react";
// import { withTheme } from "styled-components";
import {
Box,
Container,
Row,
Column,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{color: "white", fontSize: "16px", position: "absolute", top: "25%"}}>Created By:</h1> */}
	{/*<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
</h1>*/}
		<Container>
			<Row>
				<Column>
					<Heading>Created By:</Heading>
				</Column>
				<Column>
					<Heading>Mansha</Heading>
				</Column>
				<Column>
					<Heading>Mansi</Heading>
				</Column>
				<Column>
					<Heading>Muskan</Heading>
				</Column>
				<Column>
					<Heading>Srijan</Heading>
				</Column>
			</Row>
		</Container>
	</Box>
);
};
export default Footer;
