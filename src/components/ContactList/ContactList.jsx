import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  console.log("Rendered contacts:", contacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact, index) => {
        console.log("Rendering contact with id:", contact.id);
        return (
          <li className={css.item} key={contact.id || index}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
