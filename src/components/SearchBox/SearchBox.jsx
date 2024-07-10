import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectValue } from "../../redux/filters/selectors";
import {changeFilterText} from '../../redux/filters/slice'


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
