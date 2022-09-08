export type optionsSortBy = Readonly<{
    label: string,
    value: string,
}>;

export const optionsSortBy: optionsSortBy[] = [
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