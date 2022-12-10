export function RadioButton({name, label, checked, onChange}:
                                {name: string, label: string, checked: boolean, onChange: () => void}) {
    return (
        <label>
            <input type="radio" name={name} checked={checked} onChange={onChange}/>
            {label}
        </label>
    );
}