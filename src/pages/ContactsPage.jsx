import ContactForm from "../components/ContactForm/ContactForm"
import SearchBox from '../components/SearchBox/SearchBox'
import ContactList from "../components/ContactList/ContactList"

import { useDispatch } from "react-redux";
import { addContact, fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  
  return (
    <div>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage
