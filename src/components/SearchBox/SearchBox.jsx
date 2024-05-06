import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter({ inputValue: e.currentTarget.value }));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
