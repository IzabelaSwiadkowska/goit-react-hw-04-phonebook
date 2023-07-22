import propTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const labelName = nanoid();
  const labelNumber = nanoid();

  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={labelName} className={styles.label}>
          Name
        </label>
        <input
          className={styles.input}
          id={labelName}
          value={name}
          placeholder="Enter name"
          onChange={nameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={labelNumber} className={styles.label}>
          Number
        </label>
        <input
          className={styles.input}
          id={labelNumber}
          value={number}
          placeholder="Enter phone number"
          onChange={numberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: propTypes.func,
};
export default ContactForm;
