import {useDispatch} from "react-redux";
import {resetPageNumber, selectFilterGenre} from "../../../store/action/action";

type Genre = {
    genre: string,
    id: number,
    checkedGenres: number[]
}


export function TemplateCheckboxGenre({genre, id, checkedGenres}: Genre) {
    const isCheckboxChecked = new Set(checkedGenres).has(id);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(selectFilterGenre(id));
        dispatch(resetPageNumber(1));
    }

    return (
        <div className="genre">
            <label>
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleClick}/>
                {genre}
            </label>
        </div>
    );
}