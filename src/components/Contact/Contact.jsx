import css from "../Contact/Contact.module.css";
import PropTypes from 'prop-types'

const Contact = ({ item, handleDelete }) => {

  return (
    <div>
          <li key={item.id} className={css["contact-item"]}>
            <span className={css["contact-name"]}>{item.name}</span>
            <span className={css["contact-number"]}>tel.{item.number}</span>
            <button
              className={css["button-delete"]}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
    </div>
  );
}
Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Contact;