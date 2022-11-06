import {useDispatch, useSelector} from "react-redux";
import {movieList} from "../../data/movieData";
import parseISO from "date-fns/parseISO";
import {useEffect} from "react";
import {numberPages} from "../../store/action/action";

export function organizeListOfMovies() {
    const dispatch = useDispatch();

    const selectedFilterSortBy = useSelector(({setSortBy}: {setSortBy: string}) => setSortBy);
    const selectedFilterYear = useSelector(({setFilterYear}: {setFilterYear: string}) => setFilterYear);
    const selectedGenres = useSelector(({setCheckboxState}: {setCheckboxState: number[]}) => setCheckboxState);
    const selectedMovies = useSelector(({addMovieToSelected}: {addMovieToSelected: number[]}) => addMovieToSelected);
    const watchLaterMovies = useSelector(({addMovieToWatchLater}: {addMovieToWatchLater: number[]}) => addMovieToWatchLater);

    const filteredMovieListByYearRelease = movieList.filter(item => {
        if (selectedFilterYear === "noSelected") return true;
        return parseISO(item.release_date).getFullYear().toString() === selectedFilterYear;
    });

    const filteredMovieListByGenres = filteredMovieListByYearRelease.filter(item => {
        const isGenreFilters = selectedGenres.length;
        if (!isGenreFilters) return true;

        for (const selectedGenre of selectedGenres) {
            if (item.genre_ids.includes(selectedGenre)) return item;
        }
    });

    const filteredMovieListByUserWishes = filteredMovieListByGenres.filter(item => {
        const isWatchLaterMovie = new Set(watchLaterMovies).size;
        const isSelectedMovie = new Set(selectedMovies).size;

        switch (selectedFilterSortBy) {
            case "watchLater":
                if (isWatchLaterMovie) {
                    return new Set(watchLaterMovies).has(item.id);
                }
                return false;
            case "chosen":
                if (isSelectedMovie) {
                    return new Set(selectedMovies).has(item.id);
                }
                return false;
            default:
                return true;
        }
    });

    useEffect(() => {
        dispatch(numberPages(Math.ceil(filteredMovieListByUserWishes.length / 10)));
    });

    return filteredMovieListByUserWishes.sort((a, b): number => {
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
                return 1;
        }
    });
}