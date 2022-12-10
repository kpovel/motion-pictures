import {MovieList} from "../../types";
import {useState} from "react";
import {Link} from "react-router-dom";
import {checkboxGenre} from "../../data/movieData";

export function ProposedMovies({filteredMovieList, searchMovieAgain}:
                                   {filteredMovieList: MovieList[], searchMovieAgain: () => void}) {
    const [numberOfSelectedMovie, setNumberOfSelectedMovie] = useState<number>(0);
    const noMoreMovies = numberOfSelectedMovie > filteredMovieList.length - 1;
    const selectedMovie = filteredMovieList[numberOfSelectedMovie];

    const imagePath = selectedMovie?.poster_path || selectedMovie?.backdrop_path;
    const imageLink = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    function selectNextMovie() {
        setNumberOfSelectedMovie((prevState) => prevState + 1);
    }

    return (
        <div>
            {noMoreMovies ?
                <p>No more movie with the filters. Can you try search movie again?</p> :
                <div className="movie-poster">
                    <img className="movie-poster__image" src={imageLink} alt={selectedMovie?.title}/>
                    <div className="movie-info">
                        <div className="movie-info">
                            <h2 className="movie-info__title">{selectedMovie?.title}</h2>
                            <div className="movie-info__facts">
                                <p className="movie-facts__item">🅁 {selectedMovie?.release_date}</p>
                                {checkboxGenre.map((genre, key) => {
                                    const selectedGenres = new Set(selectedMovie?.genre_ids);
                                    if (selectedGenres.has(genre.id)) {
                                        return <p className="movie-facts__item" key={key}>{genre?.name}</p>;
                                    }
                                })}
                            </div>
                        </div>
                        <div className="movie-info">
                            <h3>Overview</h3>
                            <div className="movie-info__description">
                                <p className="movie-info__overview">{selectedMovie?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="rate-movie">
                {noMoreMovies ?
                    <>
                        <Link to={"/"}>
                            <button className="rate-movie__button">No</button>
                        </Link>
                        <button className="rate-movie__button" onClick={searchMovieAgain}>Yes</button>
                    </> :
                    <>
                        <Link to={`/movie/${selectedMovie.id}`}>
                            <button className="rate-movie__button">Suitable</button>
                        </Link>
                        <button className="rate-movie__button" onClick={selectNextMovie}>Show other</button>
                    </>
                }
            </div>
        </div>
    );
}