/* eslint-disable indent */
import {Pagination} from "./pagination/pagination";
import {SelectMovieFilter} from "./filters/selectMovieFilter";
import {optionsYearRelease} from "../../data/optionsYearRelease";
import {optionSortByForAuthorizedUser, optionsSortBy} from "../../data/optionSortBy";
import {ResetMovieFilters} from "./filters/resetMovieFilters";
import {CheckboxGenre} from "./filters/checkboxGenre";
import {useCookies} from "react-cookie";
import {Box, Typography} from "@mui/material";

export function MovieFilter() {
    const [cookie] = useCookies(["isAuthorized"]);
    const isUserAuthorized = cookie.isAuthorized === "true";
    const sortBySelectors = isUserAuthorized ? optionSortByForAuthorizedUser : optionsSortBy;

    return (
        <Box sx={{
            m: 2,
            p: 1.5,
            px: 2,
            width: "100%",
            maxWidth: 300,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 5
        }}>
            <Typography component="h2" variant="h5">Filters</Typography>
            <ResetMovieFilters/>
            <SelectMovieFilter option={sortBySelectors}
                               labelName="Sort by"
                               reduxStateSetting="setSortBy"
            />
            <SelectMovieFilter option={optionsYearRelease}
                               labelName="Year of release"
                               reduxStateSetting="setFilterYear"
            />
            <CheckboxGenre/>
            <Pagination/>
        </Box>
    );
}