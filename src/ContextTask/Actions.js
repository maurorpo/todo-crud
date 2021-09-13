const headers = new Headers()
let dataUser = JSON.parse(localStorage.getItem("currentUser"));
if (dataUser) {
  headers.append("Authorization", `Bearer ${dataUser.token}`);

} else {
  headers.append("Authorization", `Bearer `);
}

headers.append("Content-Type", "application/json");

export async function AddTask(dispatch, addTaskPayload) {
  
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(addTaskPayload),
    redirect: 'follow'
  };

  try {
    dispatch({ type: 'REQUEST_ADD_TASK' });
    let response = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions);
    let data = await response.json();

    if (data.data.description) {
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
      localStorage.setItem('description', JSON.stringify(data));
      return data
    }
    
    dispatch({ type: 'ADD_TASK_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'ADD_TASK_ERROR', error: error });
  }
}

export async function GetTask() {
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/task", requestOptions)
    .then(response => response.text())
    .then(result => localStorage.setItem('allTask', result))
    .catch(error => console.log('error', error));
  
}

export async function DeleteTask(dispatch) {
  const requestOptions = {
    method: 'DELETE',
    headers: headers,
    redirect: 'follow'
  };

  try {
    dispatch({ type: 'REQUEST_ADD_TASK' });
    let response = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/`, requestOptions);
    let data = await response.json();

    if (data.data.description) {
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
      localStorage.setItem('description', JSON.stringify(data));
      return data
    }
    
    dispatch({ type: 'ADD_TASK_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'ADD_TASK_ERROR', error: error });
  }

}