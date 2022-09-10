import {useDispatch, useSelector} from "react-redux";
import {nextPage, previousPage} from "../../../store/action/action";

export function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector(({setPage} : {setPage: number}) => setPage);
    const numberPages = useSelector(({setNumberPage} : {setNumberPage: number}) => setNumberPage);

    function setPreviousPage() {
        dispatch(previousPage(currentPage));
    }

    function setNextPage() {
        dispatch(nextPage(currentPage));
    }

    return (
        <div className="pagination">
            <div className="pagination__buttons">
                <button
                    className={currentPage === 1 ? "pagination-button pagination-button__grey" : "pagination-button"}
                    onClick={setPreviousPage}>Previous
                </button>
                <button
                    className={currentPage === numberPages ? "pagination-button pagination-button__grey" : "pagination-button"}
                    onClick={setNextPage}>Next
                </button>
            </div>
            <div className="number-pages">{currentPage} of {numberPages}</div>
        </div>
    );
}