import './App.css';
import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

function App() {

  const AdminUser = {
    username: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:'', username:''})
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    if (details.username == AdminUser.username && details.password == AdminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name,
        username: details.username
      })
    } else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }

      
  }

  const Logout = () => {
    setUser({name:'', username:''})
  }
  return (
    <div className="App">
      {(user.username !='') ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

