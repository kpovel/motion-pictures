import {MovieList} from "../../types";

export function MovieTemplate({poster_path, backdrop_path, vote_average, title, id}: MovieList) {
    const imagePath = poster_path || backdrop_path;
    const imageLink = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    return (
        <div className="movie" key={id}>
            <img className="movie_preview" src={imageLink} alt={title}/>
            <div className="description-movie">
                <div className="about-movie">
                    <div className="first-row">
                        <div className="rating">Rating: {vote_average}</div>
                        <div className="save-button">
                            <div className="star">{"\u2606"}</div>
                            <svg className="bookmark bookmark__unsaved"/>
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
        </div>
    );
}
