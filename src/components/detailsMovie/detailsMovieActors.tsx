import {Box, Typography} from "@mui/material";

export function DetailsMovieActors() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2
        }}>
            <Typography component="h1" variant="h4">Oops!</Typography>
            <Typography component="p">Sorry, an unexpected error has occurred.</Typography>
            <Typography component="i">We have no information about the actors</Typography>
        </Box>
    );
}