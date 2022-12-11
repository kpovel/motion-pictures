import {combineReducers} from "redux";
import {
    ADD_MOVIE_TO_SELECTED,
    ADD_MOVIE_TO_WATCH_LATER,
    CHECKBOX_FILTER_GENRE,
    FILTER_SORT,
    FILTER_YEAR,
    NEXT_PAGE,
    NUMBER_PAGES,
    PREVIOUS_PAGE,
    RESET_CHECKBOX_FILTERS,
    RESET_PAGE
} from "./action/actionTypes";

const savedPageNumber = Number(localStorage.getItem("currentPageNumber")) || 1;

function setPage(state = savedPageNumber, action: { type: string, pageNumber: number }) {
    let newPageNumber = 1;
    const numberPages = Number(localStorage.getItem("numberPages")) || 1;

    switch (action.type) {
        case NEXT_PAGE:
            if (action.pageNumber < numberPages) {
                newPageNumber = action.pageNumber + 1;
                localStorage.setItem("currentPageNumber", JSON.stringify(newPageNumber));
                return newPageNumber;
            }
            return numberPages;
        case PREVIOUS_PAGE:
            if (action.pageNumber > 1) {
                newPageNumber = action.pageNumber - 1;
                localStorage.setItem("currentPageNumber", JSON.stringify(newPageNumber));
            }
            return newPageNumber;
        case RESET_PAGE:
            newPageNumber = action.pageNumber;
            localStorage.setItem("currentPageNumber", JSON.stringify(newPageNumber));
            return newPageNumber;
        default:
            return state;
    }
}


const savedNumberPages = Number(localStorage.getItem("numberPages")) || 1;

function setNumberPage(state = savedNumberPages, action: { type: string, pageNumber: number }) {
    const newPageNumber = action.pageNumber;
    switch (action.type) {
        case NUMBER_PAGES:
            localStorage.setItem("numberPages", JSON.stringify(newPageNumber));
            return newPageNumber;
        default:
            return state;
    }
}


const savedYearSort = localStorage.getItem("yearReleaseSort") || "2020";

function setFilterYear(state = savedYearSort, action: { type: string, yearRelease: number }) {
    const yearRelease = action.yearRelease;

    switch (action.type) {
        case FILTER_YEAR:
            localStorage.setItem("yearReleaseSort", yearRelease.toString());
            return action.yearRelease;
        default:
            return state;
    }
}


const savedSortBy = localStorage.getItem("sortByFilter");

function setSortBy(state = savedSortBy, action: { type: string, sortBy: string }) {
    const sortBy = action.sortBy;

    switch (action.type) {
        case FILTER_SORT:
            localStorage.setItem("sortByFilter", sortBy.toString());
            return action.sortBy;
        default:
            return state;
    }
}

const savedCheckedGenre = JSON.parse(localStorage.getItem("checkedGenre") || "[]");

function selectMovieGenre(state = savedCheckedGenre, action: {type: string, genre: number}) {
    const newCheckedList = new Set(state);
    const isSelectThisFilter = newCheckedList.has(action.genre);

    switch (action.type) {
        case CHECKBOX_FILTER_GENRE:
            if (isSelectThisFilter) {
                newCheckedList.delete(action.genre);
            } else {
                newCheckedList.add(action.genre);
            }

            localStorage.setItem("checkedGenre", JSON.stringify([...newCheckedList]));
            return [...newCheckedList];
        case RESET_CHECKBOX_FILTERS:
            newCheckedList.clear();
            localStorage.setItem("checkedGenre", JSON.stringify([...newCheckedList]));
            return [...newCheckedList];
        default:
            return state;
    }
}

const savedListSelectedMovies = JSON.parse(localStorage.getItem("listOfSelectedMovie") || "[]");

function addMovieToSelected(state = savedListSelectedMovies, action: { type: string, movieID: number }) {
    const newSavedList = new Set(state);
    const isSelectedThisMovie = newSavedList.has(action.movieID);

    switch (action.type) {
        case ADD_MOVIE_TO_SELECTED:
            if (isSelectedThisMovie) {
                newSavedList.delete(action.movieID);
            } else {
                newSavedList.add(action.movieID);
            }

            localStorage.setItem("listOfSelectedMovie", JSON.stringify([...newSavedList]));
            return [...newSavedList];
        default:
            return state;
    }
}

const savedListMoviesWatchLater = JSON.parse(localStorage.getItem("watchLaterMovieList") || "[]");

function addMovieToWatchLater(state = savedListMoviesWatchLater, action: { type: string, movieID: number }) {
    const newWatchLaterList = new Set(state);
    const isHasThisMovieInList = newWatchLaterList.has(action.movieID);

    switch (action.type) {
        case ADD_MOVIE_TO_WATCH_LATER:
            if (isHasThisMovieInList) {
                newWatchLaterList.delete(action.movieID);
            } else {
                newWatchLaterList.add(action.movieID);
            }

            localStorage.setItem("watchLaterMovieList", JSON.stringify([...newWatchLaterList]));
            return [...newWatchLaterList];
        default:
            return state;
    }

}

const movie = combineReducers({
    setPage,
    setSortBy,
    setNumberPage,
    setFilterYear,
    selectMovieGenre,
    addMovieToSelected,
    addMovieToWatchLater
});

export default movie;