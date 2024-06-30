import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../../contact.json";

export default function App() {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved contacts");
    if (savedContacts !== null) {
      try {
        const parsedContacts = JSON.parse(savedContacts);
        if (Array.isArray(parsedContacts)) {
          return parsedContacts;
        } else {
          return initialContacts;
        }
      } catch (error) {
        console.error("Failed to parse saved contacts:", error);
        return initialContacts;
      }
    }
    return initialContacts;
  });
  useEffect(() => {
    window.localStorage.setItem("saved contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const uniqueId = `${Date.now()}-${contacts.length}`;
    const contactWithId = { ...newContact, id: uniqueId };
    setContacts((prevContacts) => {
      return [...prevContacts, contactWithId];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
