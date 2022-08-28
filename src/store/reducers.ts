import {combineReducers} from "redux";
import {NEXT_PAGE, PREVIOUS_PAGE} from "./action/actionTypes";
import {movieList} from "../data/data";

const savedPageNumber = Number(localStorage.getItem("currentPageNumber")) || 1;

function setPage(state = savedPageNumber, action: { type: string, pageNumber: number }) {
    let newPageNumber = 1;
    const numberPages = Math.ceil(movieList.length / 10);

    switch (action.type) {
        case NEXT_PAGE:
            if (action.pageNumber < numberPages){
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
        default:
            return state;
    }
}


const movie = combineReducers({
    setPage: setPage
});

export default movie;