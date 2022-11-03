import {MovieList} from "../../types";
import {useLoaderData} from "react-router-dom";

export function DetailsMovieInfo() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const movieLoader: MovieList = useLoaderData();
    const originalLanguage = new Intl.DisplayNames([], {type: "language"}).of(movieLoader.original_language);

    return ( 
        <div className="movie-info">
            <div className="details-row">
                <div className="details-row__title">Original title</div>
                <div className="details-row__value">{movieLoader.original_title}</div>
            </div>
            <hr/>
            <div className="details-row">
                <div className="details-row__title">Original language</div>
                <div className="details-row__value">{originalLanguage}</div>
            </div>
            <hr/>
            <div className="details-row">
                <div className="details-row__title">Country</div>
                <div className="details-row__value">{movieLoader.original_language}</div>
            </div>
            <hr/>
            <div className="details-row">
                <div className="details-row__title">Status</div>
                <div className="details-row__value">{movieLoader.release_date ? "Released" : "Unreleased"}</div>
            </div>
            <hr/>
            {!!movieLoader.release_date &&
            <>
                <div className="details-row">
                    <div className="details-row__title">Release date</div>
                    <div className="details-row__value">{movieLoader.release_date}</div>
                </div>
                <hr/>
            </>
            }
            <div className="details-row">
                <div className="details-row__title">Adult</div>
                <div className="details-row__value">{movieLoader.adult ? "Yes" : "No"}</div>
            </div>
        </div>
    );
}