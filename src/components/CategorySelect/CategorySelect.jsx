import SelectWrapper from "../SelectWrapper/SelectWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";

export const options = [
    { value: 'all', label: 'All' },
];

export const CategorySelect = ({value='', onChange=null}) => {
    return (
        <InputWrapper labelText="Category" htmlFor="categorySelect">
            <SelectWrapper
                id="categorySelect"
                value={value}
                onChange={onChange}
                options={options}
                defaultValue={options[0].value}
            />
        </InputWrapper>
    )
}