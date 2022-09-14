import {useDispatch, useSelector} from "react-redux";
import {selectFilterGenre} from "../../../store/action/action";

type Genre = {
    genre: string,
    id: number
}


export function TemplateCheckboxGenre({genre, id}: Genre) {
    const checkboxState = useSelector(({setCheckboxState}: {setCheckboxState: number[]}) => setCheckboxState);
    const isCheckboxChecked = new Set(checkboxState).has(id);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(selectFilterGenre(id));
    }

    return (
        <form>
            <div className="genre">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleClick}/>
                {genre}
            </div>
        </form>
    );
}