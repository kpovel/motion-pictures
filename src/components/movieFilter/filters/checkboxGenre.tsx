/* eslint-disable indent */
import {checkboxGenre} from "../../../data/movieData";
import {TemplateCheckboxGenre} from "./templateCheckboxGenre";

export function CheckboxGenre() {
    return (
        <div className="genres">
            {checkboxGenre.map(item => {
                return <TemplateCheckboxGenre key={item.id}
                                              genre={item.name}
                                              id={item.id}
                />;
            })}
        </div>
    );
}