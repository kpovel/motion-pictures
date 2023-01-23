import {useDispatch, useSelector} from "react-redux";
import {resetPageNumber, selectFilterSort, selectFilterYear} from "../../../store/action/action";
import {MovieFilter} from "../../../types";
import {UndefinedFilterError} from "../../../customHandlerErrors/handleErrors";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export function SelectMovieFilter({option, labelName, reduxStateSetting}: MovieFilter) {
    const dispatch = useDispatch();
    const selectedFilter = useSelector((state: any) => state[reduxStateSetting]);

    function selectFilter(value: string) {
        dispatch(resetPageNumber(1));
        switch (reduxStateSetting) {
            case "setSortBy":
                dispatch(selectFilterSort(value));
                break;
            case "setFilterYear":
                dispatch(selectFilterYear(value));
                break;
            default:
                alert(new UndefinedFilterError("Undefined filter"));
        }
    }

    return (
        <FormControl fullWidth size="small">
            <InputLabel disabled>{labelName}</InputLabel>
            <Select
                value={selectedFilter}
                label={labelName}
                onChange={e => selectFilter(e.target.value)}
            >
                {option.map((option, index) => (
                    <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}