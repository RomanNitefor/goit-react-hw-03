import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <div>
          <p className={css.text}>
            <FaUser className={css.icon} />
            {name}
          </p>
        </div>
        <div>
          <p className={css.text}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
