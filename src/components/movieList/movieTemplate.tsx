import {MovieList} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {movieToSelected, movieToWatchLater} from "../../store/action/action";
import {useCookies} from "react-cookie";
import {Link, useNavigate} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Button, Card, CardMedia, Divider, IconButton, Typography} from "@mui/material";
import {BookmarkAdded, BookmarkBorder, Star, StarBorder} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

type MovieTemplateProps = Readonly<{
    poster_path: MovieList["poster_path"],
    backdrop_path: MovieList["backdrop_path"],
    vote_average: MovieList["vote_average"],
    title: MovieList["title"],
    id: MovieList["id"],
}>;

export function MovieTemplate({poster_path, backdrop_path, vote_average, title, id}: MovieTemplateProps) {
    const imagePath = poster_path || backdrop_path;
    const imageLink = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie] = useCookies(["isAuthorized"]);
    const selectedMovies = useSelector(({addMovieToSelected}: { addMovieToSelected: number[] }) => addMovieToSelected);
    const watchLaterMovies = useSelector(({addMovieToWatchLater}: { addMovieToWatchLater: number[] }) => addMovieToWatchLater);
    const isSelectedThisMovie = new Set(selectedMovies).has(id);
    const isWatchLaterThisMovie = new Set(watchLaterMovies).has(id);
    const isUserAuthorized = cookie.isAuthorized === "true";

    function addMovieToSelected() {
        if (isUserAuthorized) {
            dispatch(movieToSelected(id));
        } else {
            navigate("/authorization");
        }
    }

    function addMovieToWatchLater() {
        if (isUserAuthorized) {
            dispatch(movieToWatchLater(id));
        } else {
            navigate("/authorization");
        }
    }

    return (
        <Grid xs={12} lg={6} p={1.5}>
            <Card
                sx={{
                    display: "flex",
                    width: 1,
                    height: 1,
                    padding: "10px",
                    borderRadius: 1,
                    boxShadow: 6,
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                        transform: "scale(1.05)",
                    }
                }}>
                <CardMedia
                    component="img"
                    image={imageLink}
                    title={title}
                    alt={title}
                    sx={{
                        height: "20rem",
                        maxWidth: 280,
                        borderRadius: 1
                    }}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: 1,
                    height: 1,
                    padding: 1
                }}>
                    <div>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 1,
                        }}>
                            <Typography variant="body1" component="p">Rating: {vote_average}</Typography>
                            <Box>
                                <IconButton onClick={addMovieToSelected} sx={{color: grey[900]}}>
                                    {isUserAuthorized && isSelectedThisMovie ? <Star/> : <StarBorder/>}
                                </IconButton>
                                <IconButton onClick={addMovieToWatchLater} sx={{color: grey[900]}}>
                                    {isUserAuthorized && isWatchLaterThisMovie ? <BookmarkAdded/> : <BookmarkBorder/>}
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" component="h3">{title}</Typography>
                    </div>
                    <Box>
                        <Divider sx={{my: 1}}/>
                        <Link to={`movie/${id}`} style={{all: "unset"}}>
                            <Button fullWidth variant="contained">Details</Button>
                        </Link>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
}
