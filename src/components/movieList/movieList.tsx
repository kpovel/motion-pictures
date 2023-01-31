import {MovieTemplate} from "./movieTemplate";
import {useDispatch, useSelector} from "react-redux";
import ErrorNoSelectedMovie from "../errorPage/errorNoSelectedMovie";
import {organizeListOfMovies} from "./organizeListOfMovies";
import {useEffect, useMemo} from "react";
import {numberPages} from "../../store/action/action";
import {Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export function MovieList() {
    const dispatch = useDispatch();
    const currentPage = useSelector(({setPage}: {setPage: number}) => setPage);
    const selectedFilterSortBy = useSelector(({setSortBy}: {setSortBy: string}) => setSortBy);
    const selectedFilterYear = useSelector(({setFilterYear}: {setFilterYear: string}) => setFilterYear);
    const selectedGenres = useSelector(({selectMovieGenre}: {selectMovieGenre: number[]}) => selectMovieGenre);
    const selectedMovies = useSelector(({addMovieToSelected}: {addMovieToSelected: number[]}) => addMovieToSelected);
    const watchLaterMovies = useSelector(({addMovieToWatchLater}: {addMovieToWatchLater: number[]}) => addMovieToWatchLater);
    const sortedMovieList = useMemo(() =>
        organizeListOfMovies(selectedFilterSortBy, selectedFilterYear, selectedGenres, selectedMovies, watchLaterMovies),
    [selectedFilterSortBy, selectedFilterYear, selectedGenres]);

    useEffect(() => {
        dispatch(numberPages(Math.ceil(sortedMovieList.length / 10) || 1));
    }, [dispatch, sortedMovieList]);

    return (
        <Box
            sx={{
                m: 2,
                mt: 0.5,
                height: 1,
                width: 1
            }}>
            <Grid container>
                {sortedMovieList.length ?
                    sortedMovieList.map((item, index) => {
                        const movieShouldBeShown = (index >= currentPage * 10 - 10) && (index < currentPage * 10);

                        if (movieShouldBeShown) {
                            return <MovieTemplate
                                key={item.id}
                                backdrop_path={item.backdrop_path}
                                id={item.id}
                                poster_path={item.poster_path}
                                title={item.title}
                                vote_average={item.vote_average}
                            />;
                        }
                    }) : <ErrorNoSelectedMovie/>}
            </Grid>
        </Box>
    );
}
