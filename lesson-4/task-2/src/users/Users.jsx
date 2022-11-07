import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.action';

const Users = ({ users, addUser, deleteUser }) => {
  const { usersList } = users;
  const onCreate = () => {
    const randomId = Math.round(Math.random() * 1000000);
    addUser({
      name: 'User',
      id: randomId,
    });
  };

  return (
    <div className="users">
      <button onClick={onCreate} className="users__create-btn">
        Create user
      </button>
      <ul className="users__list">
        {usersList.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{`${user.name} # ${user.id}`}</span>
            <button onClick={() => deleteUser(user.id)} className="users__delete-btn">
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapState = state => ({
  users: state,
});

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};
const connector = connect(mapState, mapDispatch);
export default connector(Users);
