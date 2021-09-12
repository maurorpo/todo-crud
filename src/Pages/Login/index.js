import React, { useState } from 'react';
import { InputBasic, FromGroup } from '../../AppStyles';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAuthDispatch()
  const { loading, errorMessage } = useAuthState()

  const Login = async (e) => {
    e.preventDefault()
    try {
        let response = await loginUser(dispatch, { email, password })
        if (!response.user) return
        props.history.push('/profile')
    } catch (error) {
        console.log(error)
    }
  }

  return(
    <section>
      <h1>Login</h1>
      {
        errorMessage ? <p>{errorMessage}</p> : null
      }
      <form>
        <FromGroup>
          <label htmlFor='email'>Username</label>
          <InputBasic type='text' value={email} onChange={(e) => setEmail(e.target.value)} id='email'/>
        </FromGroup>
        <FromGroup>
          <label htmlFor='password'>Password</label>
          <InputBasic type='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password'/>
        </FromGroup>
        <button onClick={Login}>Log in</button>
        <button>Sing Up</button>
      </form>
    </section>
  );
}

export default Login