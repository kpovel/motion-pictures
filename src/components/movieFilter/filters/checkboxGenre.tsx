import {checkboxGenre} from "../../../data/movieData";
import {TemplateCheckboxGenre} from "./templateCheckboxGenre";
import {useSelector} from "react-redux";
import {FormGroup} from "@mui/material";

export function CheckboxGenre() {
    const checkedGenres = useSelector(({selectMovieGenre}: {selectMovieGenre: number[]}) => selectMovieGenre);

    return (
        <FormGroup>
            {checkboxGenre.map(item => (
                <TemplateCheckboxGenre
                    key={item.id}
                    genre={item.name}
                    id={item.id}
                    checkedGenres={checkedGenres}
                />))}
        </FormGroup>
    );
}