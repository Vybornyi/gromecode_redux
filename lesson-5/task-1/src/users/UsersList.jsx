import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as userActions from './user.actions';
import { usersListSelector, currentPagSelector } from './users.selectors';

const UsersList = ({ usersList, currentPage, toogglePrevPage, tooggleNextPage }) => {
  const itemsPerPage = 3;
  const pageNumber = currentPage + 1;
  const indexTo = pageNumber * itemsPerPage;
  const totalItems = usersList.length;
  const newUserList = usersList.slice(indexTo - itemsPerPage, indexTo);
  return (
    <div>
      <Pagination
        goPrev={toogglePrevPage}
        goNext={tooggleNextPage}
        currentPage={pageNumber}
        totalItems={totalItems}
      />
      <ul className="users">
        {newUserList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};
const mapState = state => ({
  usersList: usersListSelector(state),
  currentPage: currentPagSelector(state),
});
const mapDispatch = {
  toogglePrevPage: userActions.tooglePreviousPage,
  tooggleNextPage: userActions.toogleNextPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
