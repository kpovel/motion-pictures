import {Movie} from "./dataList";

export function MovieTemplate({previewLink, rating, filmName}: Movie) {
    return (
        <div className="movie" key={filmName}>
            <img src={previewLink} alt={filmName}/>
            <div className="description-movie">
                <div className="about-movie">
                    <div className="first-row">
                        <div className="rating">Rating: {rating}</div>
                        <div className="save-button">
                            <div className="star">{"\u2606"}</div>
                            <svg className="bookmark bookmark__unsaved"/>
                        </div>
                    </div>
                    <div className="film-name">{filmName}</div>
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
