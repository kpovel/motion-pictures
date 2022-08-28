import {NEXT_PAGE, PREVIOUS_PAGE} from "./actionTypes";

export function nextPage(pageNumber: number) {
    return {
        type: NEXT_PAGE,
        pageNumber
    };
}

export function previousPage(pageNumber: number) {
    return {
        type: PREVIOUS_PAGE,
        pageNumber
    };
}
