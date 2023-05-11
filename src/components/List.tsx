import {
	CardContent,
	Typography,
	Card,
	CardMedia,
	Grid,
	Stack,
	Container,
} from "@mui/material";
import { people } from "./data";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	circularImage: {
		borderRadius: '50%',
		width:'85px',
		height:'85px'
	},
}));
const List = () => {
	const classes = useStyles();
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<Grid container sx={{ maxWidth: "50" }}>
						<Grid direction='row' xs={3}>
							<CardMedia
								className={classes.circularImage}
								component='img'
								image={image}
								alt={name}
							/>
						</Grid>
						<Grid xs={9}>
							<Container sx={{ m: 1 }}>
								<Typography variant='h4' gutterBottom>{name}</Typography>
								<Typography variant='button' display='block' gutterBottom>
									{age} years
								</Typography>
							</Container>
						</Grid>
					</Grid>
				);
			})}
		</>
	);
};

export default List;
