/* eslint-disable indent */
import "./movieList.css";
import {movieLists} from "./dataList";
import {MovieTemplate} from "./movieTemplate";

export function MovieList() {
    return (
        <div className="list">
            <div className="movie-list">
                {movieLists.map((item) => {
                    return <MovieTemplate key={item.filmName}
                                          previewLink={item.previewLink}
                                          rating={item.rating}
                                          filmName={item.filmName}
                    />;
                })}
            </div>
        </div>
    );
}
