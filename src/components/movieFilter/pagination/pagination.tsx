import {useDispatch, useSelector} from "react-redux";
import {nextPage, previousPage} from "../../../store/action/action";
import {movieList} from "../../../data/movieData";

export function Pagination() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentPage = useSelector((state: number) => state.setPage);
    const dispatch = useDispatch();
    const numberPages = Math.ceil(movieList.length / 10);

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