import "./App.css";
import {Header} from "./components/header/header";
import {MovieFilter} from "./components/movieFilter/movieFilter";
import {MovieList} from "./components/movieList/movieList";
import {Outlet, useLocation} from "react-router-dom";
import React from "react";

export function App() {
    const location = useLocation();
    const isOpenAuthorizationMenu = location.pathname === "/authorization";

    return (
        <div className={isOpenAuthorizationMenu ? "App App__disabled" : "App"}>
            <Header/>
            <main className="main-display">
                <MovieFilter/>
                <MovieList/>
            </main>
            <Outlet/>
        </div>
    );
}
