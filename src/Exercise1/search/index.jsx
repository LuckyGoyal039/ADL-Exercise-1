import React, { useRef, useState } from "react";
import './style.css'
const Search = ({ data, setFilterData }) => {

    // const [search, setSearch]=useState("");
    const [value, setValue] = useState("");

    const handleSearch = (event) => {
        // const {value}=event.target;

        // setSearch(value);

        const pattern = new RegExp(value, 'ig');

        const matchString = (val) => {
            return val.search(pattern) > -1;
        }

        const deepFilter = (item) => {

            const key = Object.keys(item);
            const found = key.filter((k) => {
                if (typeof item[k] === "string") {
                    return matchString(item[k]);
                }
                if (typeof item[k] === "object") {
                    return deepFilter(item[k]);
                }
                return false;
            });
            return found.length;
        }
        const filterData = data.filter((item, index) => {
            return deepFilter(item);
        })

        setFilterData(filterData);
    }
    return (
        <form className="form">
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search.."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input-field"
                autoComplete="off"
            />
            <button type="button" onClick={handleSearch}>Search</button>
        </form>
    )
}

export default Search;