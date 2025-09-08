import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
    return (
        <div className="searchbar-container">
            <div className="search-border">
                <IoSearchOutline className="mag-glass"/>
                <input
                    className="input-search"
                    placeholder="Search"
                />
            </div>
        </div>
    )
}

export default SearchBar;
