import {useDispatch, useSelector} from "react-redux";
import {resetPageNumber, selectFilterSort, selectFilterYear} from "../../../store/action/action";
import {MovieFilter} from "../../../types";
import {UndefinedFilterError} from "../../../customHandlerErrors/handleErrors";

export function SelectMovieFilter({option, labelName, reduxStateSetting}: MovieFilter) {
    const dispatch = useDispatch();
    const usageState = reduxStateSetting === "setSortBy" ? "setSortBy" : "setFilterYear";
    const selectedFilter = useSelector((state: any) => state[usageState]);

    function selectFilter(event: any) {
        dispatch(resetPageNumber(1));
        switch (reduxStateSetting) {
            case "setSortBy":
                dispatch(selectFilterSort(event.target.value));
                break;
            case "setFilterYear":
                dispatch(selectFilterYear(event.target.value));
                break;
            default:
                alert(new UndefinedFilterError("Undefined filter"));
        }
    }

    return (
        <div className="sort-menu">
            <label className="title-sort-menu">{labelName}</label>
            <div className="dropdown-menu">
                <select value={selectedFilter} className="sort-menu__sort" onChange={selectFilter}>
                    {option.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>;
                    })}
                </select>
            </div>
        </div>
    );
}