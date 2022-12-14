import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = (props) => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} key={userData.name} />
      ))}
    </ul>
  </div>
);

export default UsersList;
