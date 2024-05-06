import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import "./Contact.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="contact-item" key={id}>
      <p>{name}</p>
      <p> {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
