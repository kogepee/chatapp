import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = useContext(AuthContext)

  if (user) {
    return <Redirect to="/" />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      history.push("/")  //"/"に遷移
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='e-mail'
            name='email'
            placeholder='Email'
            onChange = {(e) => {
              setEmail(e.target.value)
            }}
            />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            onChange = {(e) => {
              setPassword(e.target.value)
            }}
            />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login