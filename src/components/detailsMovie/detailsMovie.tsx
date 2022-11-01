import {NavLink, useLoaderData, useLocation} from "react-router-dom";
import {movieList} from "../../data/movieData";
import {LoaderFunctionArgs} from "react-router";
import {MovieList} from "../../types";
import "./detailsMovie.css";
import {createGlobalStyle} from "styled-components";

export function loader({params}: LoaderFunctionArgs) {
    const movie = movieList.find(movie => movie.id === Number(params.movieID));
    return movie ?? null;
}

export function DetailsMovie() {
    const location = useLocation();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const movieLoader: MovieList = useLoaderData();
    const posterPath = movieLoader.poster_path;
    const backgroundPath = movieLoader.backdrop_path || posterPath;
    const backgroundImageLink = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backgroundPath}`;
    const posterLink = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`;
    const originalLanguage = new Intl.DisplayNames([], {type: "language"}).of(movieLoader.original_language);

    const DetailImage = createGlobalStyle`
        .background-image {
           --details-background__image: url(${backgroundImageLink})
        }
    `;

    return (
        <>
            <DetailImage/>
            <section>
                <div className="background-image">
                    <div className="background-content">
                        <div className="background-poster">
                            <img src={posterLink} alt="Movie cover" className="movie-cover"/>
                            <div className="details-description">
                                <h2 className="background-poster__title">{movieLoader.title}</h2>
                                <div className="background-poster__rating">Rating: {movieLoader.vote_average}</div>
                                <p className="background-derails__overview">{movieLoader.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="details-movie">
                    <nav className="details-nav">
                        <NavLink to={`${location.pathname}`}>
                            <button className="nav-button">Details</button>
                        </NavLink>
                        <NavLink to={`${location.pathname}/video`}>
                            <button className="nav-button">Video</button>
                        </NavLink>
                        <NavLink to={`${location.pathname}/actors`}>
                            <button className="nav-button">Actors</button>
                        </NavLink>
                    </nav>
                    <hr/>
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
                </div>
            </section>
        </>
    );
}