import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import User from './components/User'
function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUserName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  const createUser = () => {
    axios
      .post('http://localhost:3001/createUser', { name, age, username })
      .then((response) => {
        alert('User Created!')
        setListOfUsers([...listOfUsers, { name, age, username }])
      })
  }

  return (
    <div className="App">
      <h1> 사용자 목록</h1>
      <div className="grid">
        {listOfUsers.map((user) => {
          return (
            <div>
              <User user={user} />
            </div>
          )
        })}
      </div>
      <div>
        {listOfUsers.map((user) => {
          return (
            <div className="list">
              <h3>
                Name:{user.name},Age:{user.age},Username:{user.username}
              </h3>
            </div>
          )
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={createUser}>등록</button>
      </div>
    </div>
  )
}

export default App
