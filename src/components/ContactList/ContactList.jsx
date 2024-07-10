import css from "../ContactList/ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contactsSlice";
import {
  selectItems,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { fetchContacts, deleteContact } from "../../redux/contactsOps";


const ContactList = () => {
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {error && <h2>Error: {error.message}</h2>}
      {loading && <h2>Loading...</h2>}
      {items && (
        <ul className={css["contact-list"]}>
          {filteredItems.map((item) => (
            <Contact handleDelete={handleDelete} item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};


export default ContactList;
