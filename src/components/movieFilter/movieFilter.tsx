/* eslint-disable indent */
import "./movieFilter.css";
import {checkboxGenre} from "../../data/movieData";
import {TemplateCheckboxGenre} from "./filters/templateCheckboxGenre";
import {Pagination} from "./pagination/pagination";
import {SelectMovieFilter} from "./filters/selectMovieFilter";
import {optionsYearRelease} from "../../data/optionsYearRelease";
import {optionsSortBy} from "../../data/optionsSortBy";

export function MovieFilter() {
    return (
        <div className="filter">
            <div className="filter-block">
                <h2>Filters</h2>
                <button className="reset-filters">Reset all filters</button>
                <SelectMovieFilter option={optionsSortBy}
                                   labelName="Sort by"
                                   reduxStateSetting="setSortBy"
                />
                <SelectMovieFilter option={optionsYearRelease}
                                   labelName="Year of release"
                                   reduxStateSetting="setFilterYear"
                />
                <div className="genres">
                    {checkboxGenre.map(item => {
                        return <TemplateCheckboxGenre key={item.id}
                                                      genre={item.name}
                                                      id={item.id}
                        />;
                    })}
                </div>
                <Pagination/>
            </div>
        </div>
    );
}