import {checkboxGenre} from "../../../data/movieData";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

export function ChoiceGenre({handleChange, selectedValue}:
                                {handleChange: (genreID: number) => void, selectedValue: number | null}) {
    return (
        <FormControl>
            <RadioGroup name="select-genre">
                {checkboxGenre.map((value, index) => (
                    <FormControlLabel
                        key={index}
                        checked={selectedValue === value.id}
                        onChange={() => handleChange(value.id)}
                        control={<Radio size="small" sx={{width: 28, height: 28}}/>}
                        label={value.name}/>
                ))}
            </RadioGroup>
        </FormControl>
    );
}