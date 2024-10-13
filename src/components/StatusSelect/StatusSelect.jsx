import SelectWrapper from "../SelectWrapper/SelectWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";

export const options = [
    { value: 'all', label: 'All', color:'purple' },
    { value: 'paid', label: 'Paid', color:'green' },
    { value: 'refunded', label: 'Refunded', color:'gray' },
    { value: 'cancelled', label: 'Cancelled', color:'red' },
];


export const StatusSelect = ({value='', onChange=null}) => {
    
    return (
        <InputWrapper labelText="Status" htmlFor="statusSelect">
            <SelectWrapper
                id="statusSelect"
                value={value}
                onChange={onChange}
                options={options}
                isDotted={true}
            />
        </InputWrapper>
    )
}