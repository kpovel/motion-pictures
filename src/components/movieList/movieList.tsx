/* eslint-disable indent */
import "./movieList.css";
import {MovieTemplate} from "./movieTemplate";
import {useSelector} from "react-redux";
import ErrorNoSelectedMovie from "../errorPage/errorNoSelectedMovie";
import {organizeListOfMovies} from "./organizeListOfMovies";

export function MovieList() {
    const currentPage = useSelector(({setPage}: {setPage: number}) => setPage);
    const sortedMovieList = organizeListOfMovies();

    return (
        <div className="list">
            <div className="movie-list">
                {sortedMovieList.length ?
                    sortedMovieList.map((item, index) => {
                        const movieShouldBeShown = (index >= currentPage * 10 - 10) && (index < currentPage * 10);

                        if (movieShouldBeShown) {
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
                    }) : <ErrorNoSelectedMovie/>}
            </div>
        </div>
    );
}
