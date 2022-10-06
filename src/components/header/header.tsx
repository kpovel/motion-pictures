import "./header.css";
import {Link, Outlet} from "react-router-dom";
import {useCookies} from "react-cookie";

export function Header() {
    const [cookie, setCookie] = useCookies(["isAuthorized"]);
    const isUserAuthorized = cookie.isAuthorized === "true";

    function removeAuthorization() {
        setCookie("isAuthorized", false);
    }

    return (
        <header className="header">
            <Link to={"/"}>
                <button className="tab_name">Home</button>
            </Link>
            {isUserAuthorized ?
                <button className="login" onClick={removeAuthorization}>Log out</button> :
                <Link to={"/authorization"}>
                    <button className="login">Sing in</button>
                </Link>}
            <Outlet/>
        </header>
    );
}