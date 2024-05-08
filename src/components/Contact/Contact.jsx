import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import './Contact.css';

function Contact({ contactData }) {
  const dispatch = useDispatch();
  const handleDeleteButton = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className="contact-item">
      <li>
        <p>{contactData.name}</p>
      </li>
      <li>
        <p>{contactData.number}</p>
      </li>

      <li>
        <button
          type="button"
          onClick={() => handleDeleteButton(contactData.id)}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

export default Contact;
