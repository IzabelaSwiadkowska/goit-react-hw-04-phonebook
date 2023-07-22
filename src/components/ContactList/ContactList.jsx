import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

const ContactList = ({ deleteContact, contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <span>{name}</span>:<span className={styles.span}>{number}</span>
            <button className={styles.button} onClick={() => deleteContact(id)}>
              <FontAwesomeIcon className={styles.icon} icon={faUserXmark} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array,
  name: propTypes.string,
  number: propTypes.string,
  id: propTypes.string,

  deleteContact: propTypes.func,
};
export default ContactList;
