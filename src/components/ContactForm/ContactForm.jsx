import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67").required("Required")
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number
          <Field className={styles.input} name="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
