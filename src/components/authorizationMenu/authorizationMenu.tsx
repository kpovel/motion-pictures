/* eslint-disable indent */
import "./authorization.css";
import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useRef, useState} from "react";
import {useCookies} from "react-cookie";
import {add} from "date-fns";
import eye from "../../img/eye.svg";
import eyeSlash from "../../img/eye-slash.svg";
import {useClickOutside} from "../../customHooks/useClickOutside";

export function AuthorizationMenu() {
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const [cookie, setCookie] = useCookies(["isAuthorized"]);
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function showPassword() {
        setVisibilityPassword(!visibilityPassword);
    }

    function authorisationUser(event: FormEvent) {
        const USERNAME = "kpovel";
        const PASSWORD = "1234";
        const inputUsername = usernameRef.current?.value;
        const inputPassword = passwordRef.current?.value;
        const isCorrectAuthorizationData = USERNAME === inputUsername && PASSWORD === inputPassword;

        if (isCorrectAuthorizationData) {
            const expiresDate = add(new Date(), {months: 1});
            setCookie("isAuthorized", true, {expires: expiresDate});

            navigate("/");
        }

        event.preventDefault();
    }

    const domNode = useClickOutside(() => {
        navigate("/");
    });

    return (
        <div className="authorizationMenu">
            <div ref={domNode} className="authorization">
                <div className="authorization-title authorization-title__right">
                    <div></div>
                    <h2 className="singin-title">Sign in</h2>
                    <Link to="/">
                        <button className="button-close-menu">{"\u2715"}</button>
                    </Link>
                </div>
                <form className="input-forms" onSubmit={authorisationUser}>
                    <p>
                        <label className="label-login" htmlFor="username">Username:</label>
                        <input className="form-textbox form-textbox__active"
                               name="username" type="text"
                               placeholder="ID"
                               ref={usernameRef}
                        />
                    </p>
                    <p>
                        <label className="label-login" htmlFor="password">Password:</label>
                        <input className="form-textbox form-textbox__active"
                               name="password"
                               type={visibilityPassword ? "text" : "password"}
                               placeholder="Password"
                               ref={passwordRef}
                        />
                        <img src={visibilityPassword ? eye : eyeSlash}
                             className="show-password"
                             alt={"show-password"}
                             onClick={showPassword}/>
                    </p>
                    <input type="submit" className="login-button" value="Log in"/>
                </form>
            </div>
        </div>
    );
}