import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as userActions from './user.actions';

const SearchField = ({ fetchUserData }) => {
  const [inputValue, onChange] = useState('');
  const handleUserSearch = () => {
    fetchUserData(inputValue);
    onChange('');
  };
  return (
    <div className="name-form">
      <input
        onChange={e => onChange(e.target.value)}
        value={inputValue}
        type="text"
        className="name-form__input"
      />
      <button onClick={handleUserSearch} className="name-form__btn btn">
        Show
      </button>
    </div>
  );
};
const mapDispath = {
  fetchUserData: userActions.fetchUserData,
};
export default connect(null, mapDispath)(SearchField);
