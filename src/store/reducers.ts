import {combineReducers} from "redux";
import {FILTER_SORT, FILTER_YEAR, NEXT_PAGE, NUMBER_PAGES, PREVIOUS_PAGE, RESET_PAGE} from "./action/actionTypes";

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


const movie = combineReducers({
    setPage,
    setSortBy,
    setNumberPage,
    setFilterYear
});

export default movie;