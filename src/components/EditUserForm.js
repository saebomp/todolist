import React, {useState, useEffect} from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = (event) => {
    const {name, value} = event.target
    console.log('name', name) // user.name / user.username을 각각 가져옴
    console.log('value', value) //value 는 내가 수정한 값
    //name name
    //value Tania1
    //name username
    //value taniaisgenius2
    setUser({...user, [name]:value})
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='username'
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm