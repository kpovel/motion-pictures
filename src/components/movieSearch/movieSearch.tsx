import {useEffect, useState} from "react";
import {filterMovieList} from "./filterMovieList";
import {ProposedMovies} from "./proposedMovies";
import {ChoiceGenre} from "./movieQuestion/choiceGenre";
import {Header} from "../header/header";
import {BooleanMovieQuestion} from "./movieQuestion/booleanMovieQuestion";
import {Box, Card, styled, Typography} from "@mui/material";

export const indicatorsMovie = {
    low: "low",
    high: "high"
};

export function scrollToTopPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

const MovieSearchTitle = styled(Typography)(({theme}) => ({
    ...theme.typography.h5,
    textAlign: "center",
    marginBottom: theme.spacing(2)
}));

const MovieSearchSection = styled(Card)(() => ({
    paddingTop: 56,
    height: "100vh",
    boxShadow: "none",
    scrollSnapAlign: "center",
    scrollSnapStop: "always",

    display: "grid",
    placeContent: "center",
    justifyItems: "center",
}));

export function MovieSearch() {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [movieRating, setMovieRating] = useState<string | null>(null);
    const [selectedPopularity, setSelectedPopularity] = useState<string | null>(null);
    const noAllQuestionAnswered = !selectedGenre || !movieRating || !selectedPopularity;

    useEffect(() => {
        scrollToTopPage();
        document.documentElement.style.setProperty("scroll-snap-type", "y mandatory");
    }, []);

    function handleSelectGenre(genreID: number | null) {
        setSelectedGenre(genreID);
        scrollDown();
    }

    function handleSelectRating(rating: string | null) {
        setMovieRating(rating);
        scrollDown();
    }

    function handleSelectPopularity(popularity: string | null) {
        setSelectedPopularity(popularity);
        scrollDown();
    }

    function resetAllMoviePreference() {
        setSelectedGenre(null);
        setMovieRating(null);
        setSelectedPopularity(null);

        scrollToTopPage();
    }

    return (
        <>
            <Header/>
            <Box>
                <MovieSearchSection>
                    <MovieSearchTitle variant="h2">Choose the genre of the movie</MovieSearchTitle>
                    <ChoiceGenre handleChange={handleSelectGenre} selectedValue={selectedGenre}/>
                </MovieSearchSection>
                <MovieSearchSection>
                    <MovieSearchTitle variant="h2">Choose the rating of the movie</MovieSearchTitle>
                    <BooleanMovieQuestion
                        questionName="rating"
                        selectedValue={movieRating}
                        handleChange={handleSelectRating}
                    />
                </MovieSearchSection>
                <MovieSearchSection>
                    <MovieSearchTitle variant="h2">Choose the popularity of the movie</MovieSearchTitle>
                    <BooleanMovieQuestion
                        questionName="popularity"
                        selectedValue={selectedPopularity}
                        handleChange={handleSelectPopularity}
                    />
                </MovieSearchSection>
                <MovieSearchSection>
                    <MovieSearchTitle variant="h2">Results</MovieSearchTitle>
                    {noAllQuestionAnswered ?
                        <Typography component="p" variant="body1">Answer all the questions</Typography> :
                        <ProposedMovies
                            filteredMovieList={filterMovieList(selectedGenre, movieRating, selectedPopularity)}
                            searchMovieAgain={resetAllMoviePreference}
                        />
                    }
                </MovieSearchSection>
            </Box>
        </>
    );
}