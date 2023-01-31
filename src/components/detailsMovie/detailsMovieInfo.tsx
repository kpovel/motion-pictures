import {MovieList} from "../../types";
import {useLoaderData} from "react-router-dom";
import {Box, Divider, styled, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const DetailMovie = styled(Typography)({
    width: "30vw",
    paddingRight: 10,
    minWidth: 100,
});

const SeparateDetails = styled(Divider)({
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: grey[700]
});

export function DetailsMovieInfo() {
    const movieLoader = useLoaderData() as MovieList;
    const originalLanguage = new Intl.DisplayNames([], {type: "language"}).of(movieLoader.original_language);

    return (
        <Box sx={{
            pb: 3,
            "> *": {
                display: "flex"
            }
        }}>
            <SeparateDetails/>
            <div>
                <DetailMovie>Original title</DetailMovie>
                <Typography>{movieLoader.original_title}</Typography>
            </div>
            <SeparateDetails/>
            <div>
                <DetailMovie>Original language</DetailMovie>
                <Typography>{originalLanguage}</Typography>
            </div>
            <SeparateDetails/>
            <div>
                <DetailMovie>Country</DetailMovie>
                <Typography> {movieLoader.original_language}</Typography>
            </div>
            <SeparateDetails/>
            <div>
                <DetailMovie>Status</DetailMovie>
                <Typography>{movieLoader.release_date ? "Released" : "Unreleased"}</Typography>
            </div>
            <SeparateDetails/>
            {!!movieLoader.release_date &&
                <>
                    <div>
                        <DetailMovie>Release date</DetailMovie>
                        <Typography>{movieLoader.release_date}</Typography>
                    </div>
                    <SeparateDetails/>
                </>
            }
            <div>
                <DetailMovie>Adult</DetailMovie>
                <Typography>{movieLoader.adult ? "Yes" : "No"}</Typography>
            </div>
        </Box>
    );
}