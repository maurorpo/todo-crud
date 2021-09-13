import React, {useState} from 'react'

import { AddTask } from '../../ContextTask'
import { useAuthDispatch } from '../../ContextTask'
import { FromGroup, TextAreaBasic } from '../../AppStyles';

const TaskContent = (props) => {
  const [ description, setNewTask] = useState('');

  const dispatch = useAuthDispatch()
  const AddNewTask = async (e) => {
    e.preventDefault();
    try {
      let response = await AddTask( dispatch, { description })
      if (!response.data) return
      props.history.push('/todo')
    } catch (error) {
        console.log(error)
    }
  }

  return(
    <section className='contentBasic contentBasicUser'>
      <h1>New task</h1>
      <form>
        <FromGroup>
          <label htmlFor='description'>Task</label>
          <TextAreaBasic type='text' id='description' onChange={ (e) =>  setNewTask(e.target.value) } />
        </FromGroup>
        <button className="btnBasic" onClick={AddNewTask}>Add task</button>
      </form>
    </section>
  );
}

export default TaskContent