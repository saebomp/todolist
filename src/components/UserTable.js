import React from 'react'

const UserTable = ({users}) => (
<table>
  <tread>
    <tr>
      <th>Name</th>
      <th>UserName</th>
      <th>Actions</th>
    </tr>
  </tread>
  <tbody>
    {users.length > 0 ? (
      users.map((user) => (
        <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>
        <button className="button muted-button">Edit</button>
        <button className="button muted-button">Delete</button>
      </td>
    </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )
  }
  </tbody>
</table>

)

export default UserTable