import React from 'react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import styles from './ContactForm/ContactForm.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const [firstRender, setRender] = useState(true);
  useEffect(() => {}, []);
  useEffect(() => {
    if (firstRender) {
      const contactsFromLocalStorage = localStorage.getItem('contacts');

      if (contactsFromLocalStorage !== 'undefined') {
        const parsedContacts = JSON.parse(contactsFromLocalStorage);

        if (parsedContacts) {
          setContacts(parsedContacts);
        }
      }
      setRender(false);
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, firstRender]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          contact.number.trim() === number.trim()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} addFilter={addFilter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
