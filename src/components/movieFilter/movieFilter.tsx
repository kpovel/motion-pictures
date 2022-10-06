/* eslint-disable indent */
import "./movieFilter.css";
import {Pagination} from "./pagination/pagination";
import {SelectMovieFilter} from "./filters/selectMovieFilter";
import {optionsYearRelease} from "../../data/optionsYearRelease";
import {optionSortByForAuthorizedUser, optionsSortBy} from "../../data/optionSortBy";
import {ResetMovieFilters} from "./filters/resetMovieFilters";
import {CheckboxGenre} from "./filters/checkboxGenre";
import {useCookies} from "react-cookie";

export function MovieFilter() {
    const [cookie] = useCookies(["isAuthorized"]);
    const isUserAuthorized = cookie.isAuthorized === "true";
    const sortBySelectors = isUserAuthorized ? optionSortByForAuthorizedUser : optionsSortBy;

    return (
        <div className="filter">
            <div className="filter-block">
                <h2>Filters</h2>
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
            </div>
        </div>
    );
}