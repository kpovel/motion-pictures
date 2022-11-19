/* eslint-disable indent */
import {movieList} from "../../data/movieData";

export function filterMovieList(selectedGenre: number | null,
                                isHighRating: boolean | null,
                                selectedPopularity: boolean | null) {
    const filteredMovieListByGenres = movieList.filter(item => {
        if (!selectedGenre) return true;
        if (item.genre_ids.includes(selectedGenre)) return item;
    });

    const filteredMovieListByRating = filteredMovieListByGenres.filter(item => {
        if (isHighRating === null) return true;
        if (isHighRating && item.vote_average > 5) return item;
        if (!isHighRating && item.vote_average < 5) return item;
    });

    const filteredMovieListByPopularity = filteredMovieListByRating.filter(item => {
        if (selectedPopularity === null) return true;
        if (selectedPopularity && item.popularity > 100 && item.vote_count > 200) return item;
        if (!selectedPopularity && item.popularity < 100 && item.vote_count < 200) return item;
    });

    return filteredMovieListByPopularity;
}
