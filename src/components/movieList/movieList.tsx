/* eslint-disable indent */
import "./movieList.css";
import {movieList} from "../../data/data";
import {MovieTemplate} from "./movieTemplate";
import {useSelector} from "react-redux";

export function MovieList() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentPage = useSelector((state: number) => state.setPage);

    return (
        <div className="list">
            <div className="movie-list">
                {movieList.map((item, index) => {
                    const selectionFilms = (index >= currentPage * 10 - 10) && (index < currentPage * 10);

                    if (selectionFilms){
                        return <MovieTemplate key={item.id}
                                              adult={item.adult}
                                              backdrop_path={item.backdrop_path}
                                              genre_ids={item.genre_ids}
                                              id={item.id}
                                              original_language={item.original_language}
                                              original_title={item.original_title}
                                              overview={item.overview}
                                              popularity={item.popularity}
                                              poster_path={item.poster_path}
                                              release_date={item.release_date}
                                              title={item.title}
                                              video={item.video}
                                              vote_average={item.vote_average}
                                              vote_count={item.vote_count}
                        />;
                    }

                })}
            </div>
        </div>
    );
}
