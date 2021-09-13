import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { GetTask } from '../../ContextTask';
import EditIcon from '@material-ui/icons/Edit';

const Todo = () => {

  GetTask()
  const listTasks = localStorage.getItem('allTask')
  const listJson = JSON.parse(listTasks)
  const arrayValue = Object.values(listJson);
  const [ AllTask, setAllTask ] = useState(arrayValue[1])

  
  return(
    <section className='contentBasic'>
      <h1>Todo</h1>
      <div className='actions-task'>
        <div>Buscador</div>
        <Link to='/new-task' className='btnBasic'>New task</Link>
        <div className='btnBasic'>Remove selected</div>
      </div>
        <table>
          <thead className="headTable">
            <tr>
              <th>Check</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Created at</th>
              <th>Update at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {AllTask.map((task) => {
              console.log(task)
              return (
                <tr key={task._id}>
                  <td>
                    <input type='checkbox'></input>
                  </td>
                  <td>
                    {task.description}
                  </td>
                  <td>
                    {task.completed}
                  </td>
                  <td>
                    {task.createdAt}
                  </td>
                  <td>
                    {task.updatedAt}
                  </td>
                  <td>
                    <EditIcon />
                  </td>
                </tr>
              )
            })
            }
          </tbody>
      </table>
    </section>
  )
}

export default Todo