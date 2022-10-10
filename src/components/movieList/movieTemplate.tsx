import {MovieList} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {movieToSelected, movieToWatchLater} from "../../store/action/action";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export function MovieTemplate({poster_path, backdrop_path, vote_average, title, id}: MovieList) {
    const imagePath = poster_path || backdrop_path;
    const imageLink = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie] = useCookies(["isAuthorized"]);
    const selectedMovies = useSelector(({addMovieToSelected}: { addMovieToSelected: number[] }) => addMovieToSelected);
    const watchLaterMovies = useSelector(({addMovieToWatchLater}: { addMovieToWatchLater: number[] }) => addMovieToWatchLater);
    const isSelectedThisMovie = new Set(selectedMovies).has(id);
    const isWatchLaterThisMovie = new Set(watchLaterMovies).has(id);
    const isUserAuthorized = cookie.isAuthorized === "true";

    function addMovieToSelected() {
        if (isUserAuthorized) {
            dispatch(movieToSelected(id));
        } else {
            navigate("/authorization");
        }
    }

    function addMovieToWatchLater() {
        if (isUserAuthorized) {
            dispatch(movieToWatchLater(id));
        } else {
            navigate("/authorization");
        }
    }

    return (
        <article className="movie" key={id}>
            <img className="movie_preview" src={imageLink} alt={title}/>
            <div className="description-movie">
                <div className="about-movie">
                    <div className="first-row">
                        <div className="rating">Rating: {vote_average}</div>
                        <div className="save-button">
                            <div onClick={addMovieToSelected} className={isSelectedThisMovie && isUserAuthorized ?
                                "icon-star icon-star__selected" : "icon-star icon-star__unselected"}/>
                            <svg onClick={addMovieToWatchLater} className={isWatchLaterThisMovie && isUserAuthorized ?
                                "icon-bookmark icon-bookmark__saved" : "icon-bookmark icon-bookmark__unsaved"}/>
                        </div>
                    </div>
                    <div className="film-name">{title}</div>
                </div>
                <div className="details">
                    <hr/>
                    <button className="details-button">
                        Details
                    </button>
                </div>
            </div>
        </article>
    );
}
