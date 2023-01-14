import {State} from "./state"

import {
   CHANGE_VALUE,
   GET_MOVIES, DISPLAY_ALERT,
   CLEAR_ALERT,
   SETUP_USER_BEGIN,
   SETUP_USER_SUCCESS,
   SETUP_USER_ERROR,
   TOGGLE_SIDEBAR,
   LOGOUT_USER,
   UPDATE_USER_BEGIN,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_ERROR,
   HANDLE_CHANGE,
   GET_CURRENT_USER_BEGIN,
   GET_CURRENT_USER_SUCCESS
 } from './actions'
 
 const reducer = (state, action) => {
   if(action.type===CHANGE_VALUE){
     return {
       ...state,
       searchValue:action.payload.data
     }
    }

    if(action.type===GET_MOVIES){
      return{
        ...state,
        data:action.payload.data
      }
    }

    // The 

    if (action.type === DISPLAY_ALERT) {
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      };
    }
    if (action.type === CLEAR_ALERT) {
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    }
  
    if (action.type === SETUP_USER_BEGIN) {
      return { ...state, isLoading: true };
    }
    if (action.type === SETUP_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      };
    }
    if (action.type === SETUP_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    }
    if (action.type === TOGGLE_SIDEBAR) {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
    if (action.type === LOGOUT_USER) {
      return {
        ...State,
        userLoading: false,
      };
    }
    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true };
    }
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Profile Updated!',
      };
    }
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    }
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        page: 1,
        [action.payload.name]: action.payload.value,
      };
    }

    if (action.type === GET_CURRENT_USER_BEGIN) {
      return { ...state, userLoading: true, showAlert: false };
    }
    if (action.type === GET_CURRENT_USER_SUCCESS) {
      return {
        ...state,
        userLoading: false,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
      };
    }

    
 
 
  //  throw new Error(`no such action : ${action.type}`)
 }
 
 export default reducer
 