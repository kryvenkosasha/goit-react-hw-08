import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './ContactForm.css'

import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";





const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    number: Yup.number()
      .required("Number is required")
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values.name, values.number));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="add-form">
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number"  />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit" className="add-form-btn">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
