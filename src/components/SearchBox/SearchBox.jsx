import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterText, selectValue } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectValue);

  return (
    <div>
      <input
        className={css['search-input']}
        type="text"
        id={id}
        value={value}
        onChange={({ target: { value } }) => dispatch(changeFilterText(value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};


export default SearchBox;
