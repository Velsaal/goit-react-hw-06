import ContactItem from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
    ))}
  </ul>
);

export default ContactList;
