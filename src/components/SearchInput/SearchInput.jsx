import SearchIcon from "../Icons/SearchIcon";
import InputWrapper from "../InputWrapper/InputWrapper";

const SearchInput = ({value='', onChange=null}) => {
    return (
        <InputWrapper labelText="Search for order" htmlFor="invoiceSearch">
            <SearchIcon width="20" height="20"/>
            <input
                className="focus:outline-none focus:border-none"
                type="text"
                id="invoiceSearch"
                name="invoiceSearch"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search"
                required={false}
            />
        </InputWrapper>
    )
}

export default SearchInput;