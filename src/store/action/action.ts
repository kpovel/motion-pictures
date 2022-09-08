import {FILTER_SORT, FILTER_YEAR, NEXT_PAGE, PREVIOUS_PAGE} from "./actionTypes";

export {nextPage, previousPage, selectFilterSort, selectFilterYear};

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

function selectFilterSort(sortBy: string) {
    return {
        type: FILTER_SORT,
        sortBy
    };
}

function selectFilterYear(yearRelease: number) {
    return {
        type: FILTER_YEAR,
        yearRelease
    };
}
