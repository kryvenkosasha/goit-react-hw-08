import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import './ContactList.css'

function ContactList() {
  const filteredContactList = useSelector(selectFilteredContacts);
  return (
    <div className="contacts-list">
      {filteredContactList.map((contactData) => (
        <Contact key={contactData.id} contactData={contactData} />
      ))}
    </div>
  );
}

export default ContactList;
