import {MovieList} from "../../types";
import {useState} from "react";
import {Link} from "react-router-dom";
import {checkboxGenre} from "../../data/movieData";
import {Box, Button, Card, CardMedia, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

export function ProposedMovies({filteredMovieList, searchMovieAgain}:
                                   {filteredMovieList: MovieList[], searchMovieAgain: () => void}) {
    const [numberOfSelectedMovie, setNumberOfSelectedMovie] = useState<number>(0);
    const noMoreMovies = numberOfSelectedMovie > filteredMovieList.length - 1;
    const selectedMovie = filteredMovieList[numberOfSelectedMovie];
    const selectedGenresId = new Set(selectedMovie?.genre_ids);
    const yearOfRealise = new Date(selectedMovie?.release_date).getFullYear();
    const imagePath = selectedMovie?.poster_path || selectedMovie?.backdrop_path;
    const imageLink = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    function getSelectedGenres() {
        const selectedGenres = checkboxGenre.filter((genre) => selectedGenresId.has(genre.id));
        return selectedGenres.map((genre) => genre.name).join(", ");
    }

    function selectNextMovie() {
        setNumberOfSelectedMovie((prevState) => prevState + 1);
    }

    return (
        <Box>
            {noMoreMovies ?
                <Typography variant="body1" component="p" sx={{marginX: 2}}>
                    No more movie with the filters. Can you try search movie again?
                </Typography> :
                <Card
                    sx={{
                        boxShadow: 0,
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        marginTop: 1,
                        "@media (max-width: 1020px)": {
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }
                    }}>
                    <CardMedia
                        component="img"
                        image={imageLink}
                        alt={selectedMovie?.title}
                        sx={{
                            objectFit: "cover",
                            borderRadius: "24px 0 0 24px",
                            backgroundImage: "linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%)",
                            aspectRatio: 11/16,
                            height: "30vw",
                            minHeight: 430,
                            maxHeight: 580,
                            "@media (max-width: 1020px)": {
                                borderRadius: "24px 24px 0 0",
                                aspectRatio: 1,
                                height: "30vh",
                                minHeight: 200,
                                maxHeight: 300,
                                width: "45vw",
                                maxWidth: 500,
                            },
                            "@media (max-width: 600px)": {
                                aspectRatio: 16/11,
                                height: "10vh",
                                minHeight: 200,
                                width: "100vw",
                            }
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: 650,
                            "@media (max-width: 1020px)": {
                                width: "auto",
                                maxWidth: 600,
                                paddingX: 2.5,
                            }
                        }}
                    >
                        <Box sx={{maxWidth: 650}}>
                            <Typography variant="h5" component="h3" sx={{display: "inline-block"}}>
                                {selectedMovie?.title}
                                <Typography variant="h5" component="p" color={grey[700]} sx={{display: "inline-block"}}>
                                    &nbsp;({yearOfRealise})
                                </Typography>
                            </Typography>
                            <Typography variant="body1" component="p">{getSelectedGenres()}</Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 650,
                                "@media (max-width: 1020px)": {
                                    width: "auto",
                                    maxWidth: 600,
                                }
                            }}
                        >
                            {selectedMovie?.overview ?
                                <>
                                    <Typography variant="h6" component="h4">Overview</Typography>
                                    <Typography variant="body1" component="p">
                                        {selectedMovie?.overview.length > 280 ?
                                            selectedMovie?.overview.slice(0, 280) + "..." :
                                            selectedMovie?.overview
                                        }
                                    </Typography>
                                </> : ""
                            }
                        </Box>
                    </Box>
                </Card>
            }
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                    gap: 2
                }}>
                {noMoreMovies ?
                    <>
                        <Link to={"/"} style={{all: "unset"}}>
                            <Button variant="contained" sx={{width: "10em"}}>No</Button>
                        </Link>
                        <Button variant="contained" sx={{width: "10em"}} onClick={searchMovieAgain}>Yes</Button>
                    </> :
                    <>
                        <Link to={`/movie/${selectedMovie.id}`} style={{all: "unset"}}>
                            <Button variant="contained" sx={{width: "10em"}}>Suitable</Button>
                        </Link>
                        <Button variant="contained" sx={{width: "10em"}} onClick={selectNextMovie}>Show other</Button>
                    </>
                }
            </Box>
        </Box>
    );
}