import {Box, Typography} from "@mui/material";

export default function ErrorNoSelectedMovie() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <Typography component="h1" variant="h2">Oops!</Typography>
            <p>Sorry, an unexpected error has occurred. </p>
            <p>
                <i> There aren&apos;t selected movies</i>
            </p>
        </Box>
    );
}