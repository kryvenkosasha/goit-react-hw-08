import React from "react";
import Contact from "../Contact/Contact.jsx";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} id={id} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
