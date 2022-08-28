export type MovieList = {
    overview: string;
    original_language: string;
    original_title: string;
    video: boolean;
    title: string;
    genre_ids: number[];
    poster_path: string;
    backdrop_path: string |  null;
    release_date: string;
    popularity: number;
    vote_average: number;
    id: number;
    adult: boolean;
    vote_count: number;
};

export type CheckboxGenre = {
    name: string;
    id: number;
};
