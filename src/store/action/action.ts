import {FILTER_SORT, FILTER_YEAR, NEXT_PAGE, NUMBER_PAGES, PREVIOUS_PAGE, RESET_PAGE} from "./actionTypes";

export {nextPage, previousPage, resetPageNumber, numberPages, selectFilterSort, selectFilterYear};

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
