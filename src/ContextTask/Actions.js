const headers = new Headers()
let dataUser = JSON.parse(localStorage.getItem("currentUser")); // por que let??
if (dataUser) {
  headers.append("Authorization", `Bearer ${dataUser.token}`); // esto puede ir en una linea

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
    let response = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions); // por que let ??
    let data = await response.json(); // por que let??

    if (data.data.description) { // falta destructuring
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
      localStorage.setItem('description', JSON.stringify(data));
      return data
    }
    
    dispatch({ type: 'ADD_TASK_ERROR', error: data.errors[0] });
    return; // por que return void
  } catch (error) { // este bloque puede ir en una sola linea
    dispatch({ type: 'ADD_TASK_ERROR', error: error });
  }
}

export async function GetTask() {
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/task", requestOptions) // si arriba utilizo async/await aqui por que usa chaining??
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
    let response = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/`, requestOptions); // por que let? por que si la url base es la misma para todos los req no esta en una constante??
    let data = await response.json(); // por que let ??

    if (data.data.description) {
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
      localStorage.setItem('description', JSON.stringify(data));
      return data
    }
    
    dispatch({ type: 'ADD_TASK_ERROR', error: data.errors[0] }); // por que se dispara una accion de tipo error si a ese punto no hay algo q me defina un error?? creo que esto deberia ir en el catch
    return; // no entiendo este retorno
  } catch (error) {
    dispatch({ type: 'ADD_TASK_ERROR', error: error });
  }

}
