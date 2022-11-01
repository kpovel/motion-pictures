import "./App.css";
import {Header} from "./components/header/header";
import {MovieFilter} from "./components/movieFilter/movieFilter";
import {MovieList} from "./components/movieList/movieList";
import {Outlet, useLocation} from "react-router-dom";
import React from "react";

function App() {
    const location = useLocation();
    const isOpenAuthorizationMenu = location.pathname === "/authorization";
    const isMainPage = isOpenAuthorizationMenu || location.pathname === "/";

    return (
        <div className={isOpenAuthorizationMenu ? "App App__disabled" : "App"}>
            <Header/>
            {isMainPage ?
                <main className="main-display">
                    <MovieFilter/>
                    <MovieList/>
                </main> : ""}
            <Outlet/>
        </div>
    );
}

export default App;
