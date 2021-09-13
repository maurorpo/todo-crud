// Optenenr  los datos del usuario de LS
let newTask = localStorage.getItem("description")
  ? JSON.parse(localStorage.getItem("description")).data.description
  : "";
 
// Defino estado inicial del usuario 
export const initialState = {
  newTaskDetail: "" || newTask,
  loading: false,
  errorMessage: null
};

// Acciones del usuario
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_ADD_TASK":
      return {
        ...initialState,
        loading: true
      };

    case "ADD_TASK_SUCCESS":
      return {
        ...initialState,
        newTaskDetail: action.payload.description,
        loading: false
      };

    default:
      throw new Error(`Error: ${action.type}`);
  }
};