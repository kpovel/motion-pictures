/* eslint-disable indent */
import "./movieSearch.css";
import {checkboxGenre} from "../../data/movieData";
import {useEffect, useState} from "react";
import {filterMovieList} from "./filterMovieList";

export const indicatorsMovie = {
    low: "low",
    high: "high"
};

function ChoiceGenre({handleChange, selectedValue}:
                         {handleChange: (genreID: number) => void, selectedValue: number | null}) {
    return (
        <div>
            {checkboxGenre.map((value, index) => {
                return <label key={index} className="input-genre">
                    <input type="radio"
                           name="genre"
                           checked={selectedValue === value.id}
                           onChange={() => handleChange(value.id)}
                    />
                    {value.name}
                </label>;
            })}
        </div>
    );
}

function RadioButton({name, label, checked, handleChange}:
                         {name: string, label: string, checked: boolean, handleChange: () => void}) {
    return (
        <label>
            <input type="radio" name={name} checked={checked} onChange={handleChange}/>
            {label}
        </label>
    );
}

export function MovieSearch() {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [movieRating, setMovieRating] = useState<string | null>(null);
    const [selectedPopularity, setSelectedPopularity] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    function handleSelectGenre(genreID: number) {
        setSelectedGenre(genreID);
        scrollDown();
    }

    function handleSelectRating(rating: string) {
        setMovieRating(rating);
        scrollDown();
    }

    function handleSelectPopularity(popularity: string) {
        setSelectedPopularity(popularity);
        scrollDown();
    }

    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }


    function handleGetResults() {
        filterMovieList(selectedGenre, movieRating, selectedPopularity);
        //    todo: offer movie after answering all questions
    }

    return (
        <div className="movie-search">
            <section>
                <div>
                    <h2>Choose the genre of the movie</h2>
                    <ChoiceGenre handleChange={handleSelectGenre} selectedValue={selectedGenre}/>
                </div>
            </section>
            <section>
                <h2>Choose the rating of the movie</h2>
                <RadioButton name="rating"
                             label="Low rating"
                             checked={movieRating === indicatorsMovie.low}
                             handleChange={() => handleSelectRating(indicatorsMovie.low)}
                />
                <RadioButton name="rating"
                             label="High rating"
                             checked={movieRating === indicatorsMovie.high}
                             handleChange={() => handleSelectRating(indicatorsMovie.high)}
                />
            </section>
            <section>
                <h2>Choose the popularity of the movie</h2>
                <RadioButton name="popularity"
                             label="Low popularity"
                             checked={selectedPopularity === indicatorsMovie.low}
                             handleChange={() => handleSelectPopularity(indicatorsMovie.low)}
                />
                <RadioButton name="popularity"
                             label="High popularity"
                             checked={selectedPopularity === indicatorsMovie.high}
                             handleChange={() => handleSelectPopularity(indicatorsMovie.high)}
                />
            </section>
            <section>
                <h2>Results</h2>
                <button type="button" onClick={handleGetResults}>Get results</button>
            </section>
        </div>
    );
}