import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import ErrorPage from "./components/errorPage/errorPage";
import {AuthorizationMenu} from "./components/authorizationMenu/authorizationMenu";
import {CookiesProvider} from "react-cookie";
import {DetailsMovie, loader as movieLoader} from "./components/detailsMovie/detailsMovie";
import {DetailsMovieInfo} from "./components/detailsMovie/detailsMovieInfo";
import {DetailsMovieActors} from "./components/detailsMovie/detailsMovieActors";
import {DetailsMovieVideo} from "./components/detailsMovie/detailsMovieVideo";
import {MovieSearch} from "./components/movieSearch/movieSearch";
import {CssBaseline} from "@mui/material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/authorization",
                element: <AuthorizationMenu/>
            },
            {
                path: "/search",
                element: <MovieSearch/>
            },
            {
                path: "/movie/:movieID",
                element: <DetailsMovie/>,
                loader: movieLoader,
                children: [
                    {
                        path: "",
                        element: <DetailsMovieInfo/>,
                        loader: movieLoader
                    },
                    {
                        path: "video",
                        element: <DetailsMovieVideo/>,
                        loader: movieLoader

                    },
                    {
                        path: "actors",
                        element: <DetailsMovieActors/>,
                        loader: movieLoader
                    }
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <CookiesProvider>
                <RouterProvider router={router}/>
                <CssBaseline/>
            </CookiesProvider>
        </Provider>
    </React.StrictMode>
);
