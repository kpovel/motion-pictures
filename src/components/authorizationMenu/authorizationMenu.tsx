/* eslint-disable indent */
import "./authorization.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
import {add} from "date-fns";
import eye from "../img/eye.svg";
import eyeSlash from "../img/eye-slash.svg";

export function AuthorizationMenu() {
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const [cookie, setCookie] = useCookies(["isAuthorized"]);
    const navigate = useNavigate();

    function showPassword() {
        setVisibilityPassword(!visibilityPassword);
    }

    function authorisationUser(event: any) {
        const USERNAME = "kpovel";
        const PASSWORD = "1234";
        const inputUsername = event.target.username.value;
        const inputPassword = event.target.password.value;
        const isCorrectAuthorizationData = USERNAME === inputUsername && PASSWORD === inputPassword;

        if (isCorrectAuthorizationData) {
            const expiresDate = add(new Date(), {months: 1});
            setCookie("isAuthorized", true, {expires: expiresDate});

            navigate("/");
        }

        event.preventDefault();
    }

    return (
        <div className="authorizationMenu">
            <div className="authorization">
                <div className="authorization-title authorization-title__right">
                    <div></div>
                    <h2 className="singin-title">Sing in</h2>
                    <Link to="/">
                        <button className="button-close-menu">{"\u2715"}</button>
                    </Link>
                </div>
                <form className="input-forms" onSubmit={authorisationUser}>
                    <p>
                        <label className="label-login" htmlFor="username">
                            Username:
                        </label>
                        <input className="form-textbox form-textbox__active" name="username" type="text"
                               placeholder="ID"/>
                    </p>
                    <p>
                        <label className="label-login" htmlFor="password">
                            Password:
                        </label>
                        <input className="form-textbox form-textbox__active" name="password"
                               type={visibilityPassword ? "text" : "password"}
                               placeholder="Password"/>
                        <img src={visibilityPassword ? eye : eyeSlash} className="show-password"
                             onClick={showPassword}/>
                    </p>
                    <input type="submit" className="login-button" value="Log in"/>
                </form>
            </div>
        </div>
    );
}