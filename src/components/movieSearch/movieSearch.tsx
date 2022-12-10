/* eslint-disable indent */
import "./movieSearch.css";
import {useEffect, useState} from "react";
import {filterMovieList} from "./filterMovieList";
import {ProposedMovies} from "./proposedMovies";
import {ChoiceGenre} from "./movieQuestion/choiceGenre";
import {RadioButton} from "./movieQuestion/radioButton";

export const indicatorsMovie = {
    low: "low",
    high: "high"
};

function scrollToTopPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

export function MovieSearch() {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [movieRating, setMovieRating] = useState<string | null>(null);
    const [selectedPopularity, setSelectedPopularity] = useState<string | null>(null);
    const noAllQuestionAnswered = !selectedGenre || !movieRating || !selectedPopularity;

    useEffect(() => {
        scrollToTopPage();
    }, []);

    function handleSelectGenre(genreID: number | null) {
        setSelectedGenre(genreID);
        scrollDown();
    }

    function handleSelectRating(rating: string | null) {
        setMovieRating(rating);
        scrollDown();
    }

    function handleSelectPopularity(popularity: string | null) {
        setSelectedPopularity(popularity);
        scrollDown();
    }

    function resetAllMoviePreference() {
        setSelectedGenre(null);
        setMovieRating(null);
        setSelectedPopularity(null);

        scrollToTopPage();
    }

    return (
        <div className="movie-search">
            <section className="movie-search__item">
                <h2 className="movie-search__title">Choose the genre of the movie</h2>
                <ChoiceGenre handleChange={handleSelectGenre} selectedValue={selectedGenre}/>
            </section>
            <section className="movie-search__item">
                <h2 className="movie-search__title">Choose the rating of the movie</h2>
                <RadioButton name="rating"
                             label="Low rating"
                             checked={movieRating === indicatorsMovie.low}
                             onChange={() => handleSelectRating(indicatorsMovie.low)}
                />
                <RadioButton name="rating"
                             label="High rating"
                             checked={movieRating === indicatorsMovie.high}
                             onChange={() => handleSelectRating(indicatorsMovie.high)}
                />
            </section>
            <section className="movie-search__item">
                <h2 className="movie-search__title">Choose the popularity of the movie</h2>
                <RadioButton name="popularity"
                             label="Low popularity"
                             checked={selectedPopularity === indicatorsMovie.low}
                             onChange={() => handleSelectPopularity(indicatorsMovie.low)}
                />
                <RadioButton name="popularity"
                             label="High popularity"
                             checked={selectedPopularity === indicatorsMovie.high}
                             onChange={() => handleSelectPopularity(indicatorsMovie.high)}
                />
            </section>
            <section className="movie-search__item">
                <h2 className="movie-search__title">Results</h2>
                {noAllQuestionAnswered ?
                    "Answer all the questions" :
                    <ProposedMovies
                        filteredMovieList={filterMovieList(selectedGenre, movieRating, selectedPopularity)}
                        searchMovieAgain={resetAllMoviePreference}
                    />
                }
            </section>
        </div>
    );
}