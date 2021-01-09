import React, { useState } from 'react'
import UserTable from './components/UserTable'

const App = () => {

  const usersData = [
    {id:1, name:'Tania', username:'taniaisgenius'},
    {id:2, name:'Johndoe', username:'whoisjohn'},
    {id:1, name:'Ben', username:'Benisben'},
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
