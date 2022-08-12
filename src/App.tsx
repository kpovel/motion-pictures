import "./App.css";
import {Header} from "./components/header/header";
import {MovieFilter} from "./components/movieFilter/movieFilter";
import {MovieList} from "./components/movieList/movieList";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main-display">
                <MovieFilter />
                <MovieList/>
            </main>
        </div>
    );
}

export default App;
