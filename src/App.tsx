import "./App.css";
import {Header} from "./components/header/header";
import {MovieFilter} from "./components/movieFilter/movieFilter";
import {MovieList} from "./components/movieList/movieList";
import {useLocation} from "react-router-dom";

function App() {
    const location = useLocation();
    return (
        <div className={location.pathname === "/authorization"? "App App__disabled" : "App"}>
            <Header/>
            <main className="main-display">
                <MovieFilter />
                <MovieList/>
            </main>
        </div>
    );
}

export default App;
