import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeFilter } from "../../redux/filters/slice";

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
    <div >
      <span>Find contacts by name</span>
      <div >
        <input
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Search contacts"
        />
        <button  onClick={handleFilterSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
