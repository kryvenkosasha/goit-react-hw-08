import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeFilter } from "../../redux/filters/slice";
import './SearchBox.css'

const SearchBox = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilterSubmit = () => {
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className="search-box">
      <span>Find contacts by name</span>
      <div className="search-box-content">
        <input
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Search contacts"
        />
        <button onClick={handleFilterSubmit} className="seach-contact-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
