/* eslint-disable indent */
import "./movieFilter.css";
import {checkboxGenre} from "../../data/data";
import {TemplateCheckboxGenre} from "./templateCheckboxGenre";
import {Pagination} from "./pagination";

export function MovieFilter() {
    return (
        <div className="filter">
            <div className="filter-block">
                <h2>Filters</h2>
                <button className="reset-filters">Reset all filters</button>

                <div className="sort-menu">
                    <label className="title-sort-menu">Sort by</label>
                    <div className="dropdown-menu">
                        <select name="sort" className="sort-menu__sort">
                            <option value="sort by popularity">Sort by popularity</option>
                            <option value="novelty">Novelty</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
                <div className="sort-menu">
                    <label className="title-sort-menu">Year of release</label>
                    <div className="dropdown-menu">
                        <select name="year" className="sort-menu__sort">
                            <option value="select year">No selected</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                        </select>
                    </div>
                </div>
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