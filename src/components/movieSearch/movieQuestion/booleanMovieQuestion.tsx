import {indicatorsMovie} from "../movieSearch";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

export function BooleanMovieQuestion(
    {handleChange, questionName, selectedValue}:
        {handleChange: (rating: (string | null)) => void, questionName: string, selectedValue: string | null}) {
    return (
        <FormControl>
            <RadioGroup name={questionName}>
                <FormControlLabel
                    checked={selectedValue === indicatorsMovie.high}
                    onChange={() => handleChange(indicatorsMovie.high)}
                    control={<Radio size="small" sx={{width: 28, height: 28}}/>}
                    label={`High ${questionName}`}
                />
                <FormControlLabel
                    checked={selectedValue === indicatorsMovie.low}
                    onChange={() => handleChange(indicatorsMovie.low)}
                    control={<Radio size="small" sx={{width: 28, height: 28}}/>}
                    label={`Low ${questionName}`}
                />
            </RadioGroup>
        </FormControl>
    );
}