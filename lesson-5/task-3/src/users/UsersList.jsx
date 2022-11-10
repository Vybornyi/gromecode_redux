import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter';
import User from './User';
import { inputChange } from './user.actions';
import { filterTextSelector, usersListFilterSelector } from './userSelector';

const UsersList = ({ usersList, filterText, onInputChange }) => {
  const count = usersList.length;
  const onChange = e => {
    onInputChange(e.target.value);
  };
  return (
    <div>
      <Filter filterText={filterText} count={count} onChange={onChange} />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapStore = state => ({
  usersList: usersListFilterSelector(state),
  filterText: filterTextSelector(state),
});
const mapDispatch = {
  onInputChange: inputChange,
};
export default connect(mapStore, mapDispatch)(UsersList);
