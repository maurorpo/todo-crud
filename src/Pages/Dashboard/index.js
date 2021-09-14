import React from 'react'
import { useAuthDispatch, logout, useAuthState } from '../../ContextUser'
 
function Dashboard(props) {
    const dispatch = useAuthDispatch() // read dispatch method from context
    const userDetails = useAuthState() //read user details from context
 
 
    const handleLogout = () => {
        logout(dispatch) //call the logout action   //esto aqui deberia ser dispatch(logout)
        
        props.history.push('/login') //navigate to logout page on logout  //destructuring
    }
    return (
        <section className='contentBasic'>
            <div >
                <h1>
                    Dashboard
                </h1>
                <h2>Hi, {userDetails.userDetails.name}</h2>
                <h3>Account details</h3>
                <ul>
                    <li>
                        <p>Email: {userDetails.userDetails.email}</p>
                    </li>
                    <li>
                        <p>Age: {userDetails.userDetails.age}</p>
                    </li>
                </ul>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </section>
    )
}
 
export default Dashboard
