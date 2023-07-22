import propTypes from 'prop-types';
import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, addFilter }) => {
  return (
    <div className={styles.container}>
      <label>Find contacts by name</label>
      <input
        className={styles.input}
        placeholder="Enter name"
        type="text"
        name="filter"
        value={filter}
        onChange={addFilter}
      ></input>
    </div>
  );
};
Filter.propTypes = {
  filter: propTypes.string,
  addFilter: propTypes.func,
};
export default Filter;
