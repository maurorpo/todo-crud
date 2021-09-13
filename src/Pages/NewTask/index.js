import React from 'react'
import { AuthProvider } from '../../ContextTask'
import TaskContent from './TaskContent';

const NewTask = (props) => {

  return(
    <AuthProvider>
      <TaskContent props={props}/>
    </AuthProvider>
  )
}

export default NewTask