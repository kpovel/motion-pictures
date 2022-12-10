/* eslint-disable indent */
import {movieList} from "../../data/movieData";
import parseISO from "date-fns/parseISO";

export function organizeListOfMovies(selectedFilterSortBy: string,
                                     selectedFilterYear: string,
                                     selectedGenres: number[],
                                     selectedMovies: number[],
                                     watchLaterMovies: number[]) {
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