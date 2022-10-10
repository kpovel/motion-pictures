import {
    ADD_MOVIE_TO_WATCH_LATER, ADD_MOVIE_TO_SELECTED,
    CHECKBOX_FILTER_GENRE,
    FILTER_SORT,
    FILTER_YEAR,
    NEXT_PAGE,
    NUMBER_PAGES,
    PREVIOUS_PAGE,
    RESET_CHECKBOX_FILTERS,
    RESET_PAGE
} from "./actionTypes";

export {
    nextPage,
    previousPage,
    resetPageNumber,
    numberPages,
    selectFilterSort,
    selectFilterYear,
    selectFilterGenre,
    resetCheckboxFilters,
    movieToSelected,
    movieToWatchLater
};

function nextPage(pageNumber: number) {
    return {
        type: NEXT_PAGE,
        pageNumber
    };
}

function previousPage(pageNumber: number) {
    return {
        type: PREVIOUS_PAGE,
        pageNumber
    };
}

function resetPageNumber(pageNumber: number) {
    return {
        type: RESET_PAGE,
        pageNumber
    };
}

function numberPages(pageNumber: number) {
    return {
        type: NUMBER_PAGES,
        pageNumber
    };
}

function selectFilterSort(sortBy: string) {
    return {
        type: FILTER_SORT,
        sortBy
    };
}

function selectFilterYear(yearRelease: string) {
    return {
        type: FILTER_YEAR,
        yearRelease
    };
}

function selectFilterGenre(genre: number) {
    return {
        type: CHECKBOX_FILTER_GENRE,
        genre
    };
}

function resetCheckboxFilters() {
    return {
        type: RESET_CHECKBOX_FILTERS
    };
}

function movieToSelected(movieID: number) {
    return {
        type: ADD_MOVIE_TO_SELECTED,
        movieID
    };
}

function movieToWatchLater(movieID: number) {
    return {
        type: ADD_MOVIE_TO_WATCH_LATER,
        movieID
    };
}