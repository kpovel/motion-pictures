/* eslint-disable indent */
import "./movieFilter.css";
import {Pagination} from "./pagination/pagination";
import {SelectMovieFilter} from "./filters/selectMovieFilter";
import {optionsYearRelease} from "../../data/optionsYearRelease";
import {optionsSortBy} from "../../data/optionsSortBy";
import {ResetMovieFilters} from "./filters/resetMovieFilters";
import {CheckboxGenre} from "./filters/checkboxGenre";

export function MovieFilter() {
    return (
        <div className="filter">
            <div className="filter-block">
                <h2>Filters</h2>
                <ResetMovieFilters/>
                <SelectMovieFilter option={optionsSortBy}
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