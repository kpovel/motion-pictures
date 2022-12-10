/* eslint-disable indent */
import "./movieList.css";
import {MovieTemplate} from "./movieTemplate";
import {useDispatch, useSelector} from "react-redux";
import ErrorNoSelectedMovie from "../errorPage/errorNoSelectedMovie";
import {organizeListOfMovies} from "./organizeListOfMovies";
import {useEffect} from "react";
import {numberPages} from "../../store/action/action";

export function MovieList() {
    const dispatch = useDispatch();
    const currentPage = useSelector(({setPage}: {setPage: number}) => setPage);
    const selectedFilterSortBy = useSelector(({setSortBy}: {setSortBy: string}) => setSortBy);
    const selectedFilterYear = useSelector(({setFilterYear}: {setFilterYear: string}) => setFilterYear);
    const selectedGenres = useSelector(({setCheckboxState}: {setCheckboxState: number[]}) => setCheckboxState);
    const selectedMovies = useSelector(({addMovieToSelected}: {addMovieToSelected: number[]}) => addMovieToSelected);
    const watchLaterMovies = useSelector(({addMovieToWatchLater}: {addMovieToWatchLater: number[]}) => addMovieToWatchLater);
    const sortedMovieList = organizeListOfMovies(selectedFilterSortBy, selectedFilterYear, selectedGenres, selectedMovies, watchLaterMovies);

    useEffect(() => {
        dispatch(numberPages(Math.ceil(sortedMovieList.length / 10)));
    }, [dispatch, sortedMovieList]);

    return (
        <div className="list">
            <div className="movie-list">
                {sortedMovieList.length ?
                    sortedMovieList.map((item, index) => {
                        const movieShouldBeShown = (index >= currentPage * 10 - 10) && (index < currentPage * 10);

                        if (movieShouldBeShown) {
                            return <MovieTemplate key={item.id}
                                                  adult={item.adult}
                                                  backdrop_path={item.backdrop_path}
                                                  genre_ids={item.genre_ids}
                                                  id={item.id}
                                                  original_language={item.original_language}
                                                  original_title={item.original_title}
                                                  overview={item.overview}
                                                  popularity={item.popularity}
                                                  poster_path={item.poster_path}
                                                  release_date={item.release_date}
                                                  title={item.title}
                                                  video={item.video}
                                                  vote_average={item.vote_average}
                                                  vote_count={item.vote_count}
                            />;
                        }
                    }) : <ErrorNoSelectedMovie/>}
            </div>
        </div>
    );
}
