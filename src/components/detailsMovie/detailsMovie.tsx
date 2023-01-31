import {NavLink, Outlet, useLoaderData} from "react-router-dom";
import {movieList} from "../../data/movieData";
import {LoaderFunctionArgs} from "react-router";
import {MovieList} from "../../types";
import {Header} from "../header/header";
import {Box, Button, Card, CardMedia, Typography} from "@mui/material";

export function loader({params}: LoaderFunctionArgs) {
    const movie = movieList.find(movie => movie.id === Number(params.movieID));
    return movie ?? null;
}

export function DetailsMovie() {
    const movieLoader = useLoaderData() as MovieList;
    const posterPath = movieLoader.poster_path;
    const backgroundPath = movieLoader.backdrop_path || posterPath;
    const backgroundImageLink = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundPath}`;
    const posterLink = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`;

    return (
        <>
            <Header/>
            <Box>
                <Card sx={{
                    background: "no-repeat",
                    backgroundImage: `linear-gradient(to right, rgba(10.5, 31.5, 52.5, 1) 150px,
                     rgba(10.5, 31.5, 52.5, 0.64) 100%), url(${backgroundImageLink})`,
                    backgroundSize: "cover",
                    borderRadius: 0,
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "30px",
                        margin: "20px auto",
                        width: "80vw",
                    }}>
                        <CardMedia
                            component="img"
                            image={posterLink}
                            alt="Movie cover"
                            sx={{
                                height: "20rem",
                                objectFit: "contain",
                                maxWidth: 320
                            }}/>
                        <Box sx={{
                            maxWidth: 670,
                            "> *": {
                                color: "white",
                            }
                        }}>
                            <Typography variant="h5" component="h2">{movieLoader.title}</Typography>
                            <Typography
                                variant="body1"
                                component="p"
                            >
                                Rating: {movieLoader.vote_average}
                            </Typography>
                            <Typography variant="body1" component="p">{movieLoader.overview}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Box>
                <Box
                    sx={{
                        margin: "20px auto",
                        width: "80vw",
                    }}>
                    <nav>
                        <NavLink to={`/movie/${movieLoader.id}`} style={{all: "unset"}}>
                            <Button>Details</Button>
                        </NavLink>
                        <NavLink to={`/movie/${movieLoader.id}/video`} style={{all: "unset"}}>
                            <Button>Video</Button>
                        </NavLink>
                        <NavLink to={`/movie/${movieLoader.id}/actors`} style={{all: "unset"}}>
                            <Button>Actors</Button>
                        </NavLink>
                    </nav>
                    <Outlet/>
                </Box>
            </Box>
        </>
    );
}