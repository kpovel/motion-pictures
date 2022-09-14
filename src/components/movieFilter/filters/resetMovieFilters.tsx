import {useDispatch} from "react-redux";
import {resetCheckboxFilters, resetPageNumber, selectFilterSort, selectFilterYear} from "../../../store/action/action";

export function ResetMovieFilters() {
    const dispatch = useDispatch();

    function resetMovieFilters() {
        const defaultFilterSortValue = "decreasingPopularity";
        const defaultFilterYearValue = "2020";

        dispatch(selectFilterSort(defaultFilterSortValue));
        dispatch(selectFilterYear(defaultFilterYearValue));
        dispatch(resetPageNumber(1));
        dispatch(resetCheckboxFilters());
    }

    return <button className="reset-filters" onClick={resetMovieFilters}>Reset all filters</button>;
}