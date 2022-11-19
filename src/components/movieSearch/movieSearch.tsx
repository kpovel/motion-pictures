/* eslint-disable indent */
import "./movieSearch.css";
import {checkboxGenre} from "../../data/movieData";
import {useState} from "react";
import {filterMovieList} from "./filterMovieList";


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
    const [isHighRating, setIsHighRating] = useState<boolean | null>(null);
    const [selectedPopularity, setSelectedPopularity] = useState<boolean | null>(null);


    function handleSelectGenre(genreID: number) {
        setSelectedGenre(genreID);
    }

    function handleSelectRating(rating: boolean) {
        setIsHighRating(rating);
    }

    function handleGetResults() {
        filterMovieList(selectedGenre, isHighRating, selectedPopularity);
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
                             checked={isHighRating === false}
                             handleChange={() => handleSelectRating(false)}
                />
                <RadioButton name="rating"
                             label="High rating"
                             checked={!!isHighRating}
                             handleChange={() => handleSelectRating(true)}
                />
            </section>
            <section>
                <h2>Choose the popularity of the movie</h2>
                <RadioButton name="popularity"
                             label="Low popularity"
                             checked={selectedPopularity === false}
                             handleChange={() => setSelectedPopularity(false)}
                />
                <RadioButton name="popularity"
                             label="High popularity"
                             checked={!!selectedPopularity}
                             handleChange={() => setSelectedPopularity(true)}
                />
            </section>
            <section>
                <h2>Results</h2>
                <input type="button" value="Get results" onClick={handleGetResults}/>
            </section>
        </div>
    );
}