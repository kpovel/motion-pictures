import {useDispatch} from "react-redux";
import {resetCheckboxFilters, resetPageNumber, selectFilterSort, selectFilterYear} from "../../../store/action/action";
import {Button} from "@mui/material";

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

    return <Button variant="contained" fullWidth onClick={resetMovieFilters}>Reset all filters</Button>;
}