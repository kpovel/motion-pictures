import {useDispatch} from "react-redux";
import {resetPageNumber, selectFilterGenre} from "../../../store/action/action";
import {Checkbox, FormControlLabel} from "@mui/material";

type Genre = {
    genre: string,
    id: number,
    checkedGenres: number[]
}


export function TemplateCheckboxGenre({genre, id, checkedGenres}: Genre) {
    const genreIsSelected = new Set(checkedGenres).has(id);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(selectFilterGenre(id));
        dispatch(resetPageNumber(1));
    }

    return (
        <FormControlLabel
            control={<Checkbox
                size="small"
                checked={genreIsSelected}
                onChange={handleClick}
                sx={{
                    height: 28,
                    width: 28,
                    ml: 1,
                }}
            />}
            label={genre}
        />
    );
}