import { useEffect, useState } from "react";
import Search from "../../Exercise1/search";
import TableData from "../table";
// import style from './home.module.scss';
import './style.css';

const HomePage = () => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [buttonValue, setButtonValue] = useState("Z-A")

    const getApiData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setData(user);
                setFilterData(user)
            })
    }
    
    useEffect(() => {
        getApiData();
    }, [])

    // sort in asc order
    const sortAsc = () => {

        setButtonValue("Z-A");
        data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        setFilterData(data);
    }
    // sort in desc order
    const sortDesc = () => {

        setButtonValue("A-Z");
        data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0
        }).reverse();
        setFilterData(data);
    }

    const handleSort = () => {
        if (buttonValue == "A-Z") {

            sortAsc();
        } else {
            // setButtonValue("ASC");
            sortDesc();
        }

    }
    return (
        <div className="outer-container">
            <div className="left-container">
                <Search
                    data={data}
                    setFilterData={setFilterData}
                />
                <button
                    type="button"
                    onClick={handleSort}
                    >{buttonValue}
                </button>

            </div>
            <div className="right-container">
                {/* {
                    filterData? <h1>Data Not Found</h1>:
                <TableData
                    data={filterData}
                    />
                } */}
                <TableData
                    data={filterData}
                    />
            </div>
        </div>
    )
}

export default HomePage;