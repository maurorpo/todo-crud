const LOGIN_URL     = 'https://api-nodejs-todolist.herokuapp.com/user/login';
const REGISTER_URL  = 'https://api-nodejs-todolist.herokuapp.com/user/register'

// Defino headers
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
    let response = await fetch(`${LOGIN_URL}`, requestOptions);
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
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}