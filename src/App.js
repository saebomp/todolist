import React, { useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

const App = () => {

  const usersData = [
    {id:1, name:'Tania', username:'taniaisgenius'},
    {id:2, name:'Johndoe', username:'whoisjohn'},
    {id:3, name:'Ben', username:'Benisben'},
  ]
  const initialFormState = {id:null, name:'', username:''}

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)


  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
    console.log(users)
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    console.log('updateUser', updateUser)
    setUsers(users.map((user) => (
      user.id === id ? updateUser:user)
      ))
  }

  return (
    <div className="container">
      <div className="">
        <div className="flex-large">
          {editing ? (
            <div>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
          ) : (
            <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
