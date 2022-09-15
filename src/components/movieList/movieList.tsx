/* eslint-disable indent */
import "./movieList.css";
import {movieList} from "../../data/movieData";
import {MovieTemplate} from "./movieTemplate";
import {useDispatch, useSelector} from "react-redux";
import parseISO from "date-fns/parseISO";
import {numberPages} from "../../store/action/action";
import {useEffect} from "react";

export function MovieList() {
    const dispatch = useDispatch();

    const currentPage = useSelector(({setPage}: { setPage: number }) => setPage);
    const selectedFilterSortBy = useSelector(({setSortBy}: { setSortBy: string }) => setSortBy);
    const selectedFilterYear = useSelector(({setFilterYear}: { setFilterYear: string }) => setFilterYear);
    const selectedGenres = useSelector(({setCheckboxState}: { setCheckboxState: number[] }) => setCheckboxState);

    const filteredMovieListBySelectors = movieList.filter(item => {
        if (selectedFilterYear === "noSelected") return true;
        return parseISO(item.release_date).getFullYear().toString() === selectedFilterYear;
    });

    const filteredMovieList = filteredMovieListBySelectors.filter(item => {
        const isGenreFilters = selectedGenres.length;
        if (!isGenreFilters) return true;

        for (const selectedGenre of selectedGenres) {
            if (item.genre_ids.includes(selectedGenre)) return item;
        }
    });

    useEffect(() => {
        dispatch(numberPages(Math.ceil(filteredMovieList.length / 10)));
    });

    const sortedMovieList = filteredMovieList.sort((a, b): any => {
        switch (selectedFilterSortBy) {
            case "decreasingPopularity":
                return a.popularity + b.popularity;
            case "increasingPopularity":
                return a.popularity - b.popularity;
            case "decreasingRating":
                return a.vote_average + b.vote_average;
            case "increasingRating":
                return a.vote_average - b.vote_average;
            default:
                return true;
        }
    });

    return (
        <div className="list">
            <div className="movie-list">
                {sortedMovieList.map((item, index) => {
                    const selectionFilms = (index >= currentPage * 10 - 10) && (index < currentPage * 10);

                    if (selectionFilms) {
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
                })}
            </div>
        </div>
    );
}
