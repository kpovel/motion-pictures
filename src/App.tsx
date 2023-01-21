import "./App.css";
import {Header} from "./components/header/header";
import {MovieFilter} from "./components/movieFilter/movieFilter";
import {MovieList} from "./components/movieList/movieList";
import {Outlet, useLocation} from "react-router-dom";
import React from "react";
import {Box, Fab, Fade, useScrollTrigger} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";
import {scrollToTopPage} from "./components/movieSearch/movieSearch";

function ScrollTop() {
    const trigger = useScrollTrigger();

    return (
        <Fade in={trigger}>
            <Box
                onClick={scrollToTopPage}
                role="presentation"
                sx={{position: "fixed", bottom: 16, right: 16}}
            >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp/>
                </Fab>
            </Box>
        </Fade>
    );
}

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
            <ScrollTop/>
            <Outlet/>
        </div>
    );
}
