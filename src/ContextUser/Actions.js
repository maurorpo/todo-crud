const LOGIN_URL     = 'https://api-nodejs-todolist.herokuapp.com/user/login'; // esta url base deberian estar en un namespace a parte para que sean usables en diferentes contextos
const REGISTER_URL  = 'https://api-nodejs-todolist.herokuapp.com/user/register'

// Defino headers ---> si el codigo es legible, no hay q comentarl
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Login user async
export async function loginUser(dispatch, loginPayload) {

  // Estructura del objeto que va a enviar
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(loginPayload),
    redirect: 'follow'
  };
 
  // Ejecuta la accion dependiendo de las validaciones
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${LOGIN_URL}`, requestOptions); // por que let ?
    let data = await response.json(); // por que let?
    //const { user } await response.json()
    //if(user)
    // sugiero hacer destructuring, queda mas legible
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) { // esto puede ir en una linea
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

// Register user async
export async function registerUser(dispatch, registerPayload) {
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(registerPayload),
    redirect: 'follow'
  };

  try {
    dispatch({ type: 'REQUEST_REGISTER' });
    let response = await fetch(`${REGISTER_URL}`, requestOptions);
    let data = await response.json();
    
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
  
}
 
// Logut
export async function logout(dispatch) { // el backend como sabe que el usuario ya no esta en sesion?? como muere el token ??
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
