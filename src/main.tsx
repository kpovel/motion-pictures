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
                path: "movie/:movieID",
                element: <DetailsMovie/>,
                loader: movieLoader,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <CookiesProvider>
                <RouterProvider router={router}/>
            </CookiesProvider>
        </Provider>
    </React.StrictMode>
);
