/* eslint-disable indent */
import {checkboxGenre} from "../../../data/movieData";
import {TemplateCheckboxGenre} from "./templateCheckboxGenre";
import {useSelector} from "react-redux";

export function CheckboxGenre() {
    const checkedGenres = useSelector(({selectMovieGenre}: {selectMovieGenre: number[]}) => selectMovieGenre);

    return (
        <div className="genres">
            {checkboxGenre.map(item => {
                return <TemplateCheckboxGenre key={item.id}
                                              genre={item.name}
                                              id={item.id}
                                              checkedGenres={checkedGenres}
                />;
            })}
        </div>
    );
}