import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => (
  <input
    className={styles.input}
    type="text"
    value={filter}
    onChange={(e) => onFilterChange(e.target.value)}
    placeholder="Search contacts"
  />
);

export default SearchBox;
