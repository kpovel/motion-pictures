import {useRouteError} from "react-router-dom";
import {Box, Typography} from "@mui/material";

export default function ErrorPage() {
    const error = useRouteError() as {statusText?: string, message?: string};

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
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Box>
    );
}