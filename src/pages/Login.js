import React from 'react'
import { useState } from 'react/cjs/react.development'
import firebase from '../config/firebase'
import SignUp from './SignUp'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
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