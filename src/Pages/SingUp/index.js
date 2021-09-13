import React, { useState }from 'react'
import { InputBasic, FromGroup } from '../../AppStyles';
import { registerUser, useAuthDispatch } from '../../ContextUser'


const SingUp = (props) => {


  const dispatch = useAuthDispatch()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Register = async (e) => {
    e.preventDefault()
    try {
      let response = await registerUser(dispatch, { name, email, password, age })
      
      if (!response.user) return
        props.history.push('/profile')

    } catch(error) {
      console.log(error)
    }
  }


  return(
    <section className='contentBasic contentBasicUser'>
      <h1>Sing Up</h1>
      <form>
        <FromGroup>
          <label htmlFor='name'>Name</label>
          <InputBasic type='text' id='name' onChange={(e) => setName(e.target.value)}/>
        </FromGroup>
        <FromGroup>
          <label htmlFor='age'>Age</label>
          <InputBasic type='text' id='age' onChange={(e) => setAge(e.target.value)}/>
        </FromGroup>
        <FromGroup>
          <label htmlFor='email'>Email</label>
          <InputBasic type='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
        </FromGroup>
        <FromGroup>
          <label htmlFor='password'>Password</label>
          <InputBasic type='password' id='password' onChange={(e) => setPassword(e.target.value)}/>
        </FromGroup>
        <button className="btnBasic" onClick={Register}>Sing Up</button>
      </form>
    </section>
  );
}

export default SingUp