import React from 'react';
import Pagination from './Pagination';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <>
      <Pagination />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </>
  );
};
export default UsersList;
