import React, { useReducer } from "react";

// Optenenr  los datos del usuario de LS
let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
 
// Defino estado inicial del usuario 
export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null
};
 
// Acciones del usuario
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "REQUEST_REGISTER":
      return {
        ...initialState,
        loading: true
      };
    case "REGISTER_SUCCES":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Error: ${action.type}`);
  }
};