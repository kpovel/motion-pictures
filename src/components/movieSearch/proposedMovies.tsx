import {MovieList} from "../../types";

export function ProposedMovies({filterMovieList}: {filterMovieList: () => MovieList[]}) {
    //    todo: offer movie after answering all questions
    const filteredMovieList = filterMovieList();
    
    return (
        <div>
            {filteredMovieList.map((value) => {
                return (
                    <section key={value.id}>
                        {value.title}
                    </section>
                );
            })}
        </div>
    );
}