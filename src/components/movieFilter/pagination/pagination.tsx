import {useDispatch, useSelector} from "react-redux";
import {nextPage, previousPage} from "../../../store/action/action";
import {Box, Button, Typography} from "@mui/material";

export function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector(({setPage}: {setPage: number}) => setPage);
    const numberPages = useSelector(({setNumberPage}: {setNumberPage: number}) => setNumberPage);

    function setPreviousPage() {
        dispatch(previousPage(currentPage));
    }

    function setNextPage() {
        dispatch(nextPage(currentPage));
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
            }}>
                <Button
                    variant="contained"
                    disabled={currentPage === 1}
                    onClick={setPreviousPage}
                    sx={{width: 100}}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    disabled={currentPage === numberPages}
                    onClick={setNextPage}
                    sx={{width: 100}}
                >
                    Next
                </Button>
            </Box>
            <Typography
                variant="body1"
                component="p"
                sx={{textAlign: "center"}}
            >
                {currentPage} of {numberPages}
            </Typography>
        </>
    );
}