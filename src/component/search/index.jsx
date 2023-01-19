
import { useState } from 'react';
import './style.css';
const Search = (props) => {

    const [inputValue, setInputValue] = useState('') // create inputValue and initial value is empty string
    const { getDataFromSearchComponent } = props;
    const handleInputValue = (event) => {
        //array destructuring
        const { value } = event.target;

        // update inputValue = value
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getDataFromSearchComponent(inputValue);
        // console.log("seach"+ inputValue);
    }
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" id="search" name="search" placeholder="Search Recipes" value={inputValue} onChange={handleInputValue} />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;