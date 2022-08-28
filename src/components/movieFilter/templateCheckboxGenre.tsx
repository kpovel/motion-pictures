import {useState} from "react";

type Genre = {
    genre: string,
    id: number
}


export function TemplateCheckboxGenre({genre, id}: Genre) {
    const [checkboxState, setCheckboxState] = useState(false);

    function handleClick(event: any) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;

        setCheckboxState(value);
    }

    return (
        <form>
            <div className="genre">
                <input type="checkbox" checked={checkboxState} onChange={handleClick}/>
                {genre}
            </div>
        </form>
    );
}