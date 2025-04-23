import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67").required("Required")
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label>Name<Field type="text" name="name" /></label>
        <ErrorMessage name="name" component="div" className={styles.error} />
        <label>Number<Field type="text" name="number" /></label>
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;