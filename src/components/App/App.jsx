import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import "./App.css";

import {addContact} from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox />
      <ContactList/>
    </>
  );
}

export default App;
