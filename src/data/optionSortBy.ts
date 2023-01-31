export type optionSortBy = Readonly<{
    label: string,
    value: string,
}>;

export const optionsSortBy: optionSortBy[] = [
    {
        label: "Decreasing popularity",
        value: "decreasingPopularity"
    },
    {
        label: "Increasing popularity",
        value: "increasingPopularity"
    },
    {
        label: "Decreasing rating",
        value: "decreasingRating"
    },
    {
        label: "Increasing rating",
        value: "increasingRating"
    }
];

export const optionSortByForAuthorizedUser: optionSortBy[] = [
    ...optionsSortBy,
    {
        label: "Watchlist",
        value: "watchlist"
    },
    {
        label: "Favorite list",
        value: "favoriteList"
    }
];