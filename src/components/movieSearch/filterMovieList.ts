/* eslint-disable indent */
import {movieList} from "../../data/movieData";
import {indicatorsMovie} from "./movieSearch";

export function filterMovieList(selectedGenre: number | null,
                                movieRating: string | null,
                                selectedPopularity: string | null) {
    const filteredMovieListByGenres = movieList.filter(item => {
        if (!selectedGenre) return true;
        if (item.genre_ids.includes(selectedGenre)) return item;
    });

    const filteredMovieListByRating = filteredMovieListByGenres.filter(item => {
        const chooseHighRatingMovie = movieRating === indicatorsMovie.high && item.vote_average > 5;
        const chooseLowRatingMovie = movieRating === indicatorsMovie.low && item.vote_average < 5;

        if (movieRating === null) return true;
        if (chooseHighRatingMovie) return item;
        if (chooseLowRatingMovie) return item;
    });

    const filteredMovieListByPopularity = filteredMovieListByRating.filter(item => {
        const choosePopularMovie = selectedPopularity === indicatorsMovie.high &&
            item.popularity > 100 && item.vote_count > 200;
        const chooseLittleKnowMovie = selectedPopularity === indicatorsMovie.low &&
            item.popularity < 100 && item.vote_count < 200;

        if (selectedPopularity === null) return true;
        if (choosePopularMovie) return item;
        if (chooseLittleKnowMovie) return item;
    });

    return filteredMovieListByPopularity;
}
