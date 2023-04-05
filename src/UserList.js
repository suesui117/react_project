import React from 'react';

import { Link } from "react-router-dom";

function UserList({ users }) {
    return (
      <div>
      
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
      <Link to="/">Go back to homepage</Link>

      </div>
    );
  }
  
  export default UserList;
