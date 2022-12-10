/* eslint-disable indent */
import {checkboxGenre} from "../../../data/movieData";

export function ChoiceGenre({handleChange, selectedValue}:
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