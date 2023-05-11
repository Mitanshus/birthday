import { useState } from "react";
import List from "./components/List";
import Nothing from "./components/Nothing";
import "./App.css";
import { people } from "./components/data";
import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";

function App() {
	const [listshow, setListShow] = useState(true);
	const [noOfPeople, setNoOfPeople] = useState(people.length);
	const handleclick = () => {
		setListShow(false);
		setNoOfPeople(0);
	};

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#ce93d8",
			}}
		>
			<Paper elevation={5}>
				<Box sx={{ padding: "32px" }}>
					<Card sx={{}}>
						<Container sx={{ alignItems: "center", justifyContent: "center" }}>
							<Box sx={{ backgroundColor: "white" }}>
								<Typography variant='h3' gutterBottom>
									{noOfPeople} Birthdays today!
								</Typography>
							</Box>
							{listshow ? <List /> : <Nothing />}
							<Button variant='contained' onClick={() => handleclick()} size="large">
								clear all
							</Button>
						</Container>
					</Card>
				</Box>
			</Paper>
		</Container>
	);
}

export default App;
