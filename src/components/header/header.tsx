import "./header.css";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

export function Header() {
    const [cookie, setCookie] = useCookies(["isAuthorized"]);
    const isUserAuthorized = cookie.isAuthorized === "true";

    function removeAuthorization() {
        setCookie("isAuthorized", false, {path: "/"});
    }

    return (
        <header className="header">
            <Link to={"/"}>
                <button className="home-button">Home</button>
            </Link>
            <div className="header-buttons">
                <Link to={"/search"}>
                    <button className="movie-search__button"/>
                </Link>
                {isUserAuthorized ?
                    <button className="login" onClick={removeAuthorization}>Log out</button> :
                    <Link to={"/authorization"}>
                        <button className="login">Sign in</button>
                    </Link>
                }
            </div>
        </header>
    );
}