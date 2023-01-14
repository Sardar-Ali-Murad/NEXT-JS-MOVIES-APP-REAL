import { createContext, useContext,useEffect } from 'react';
// import React from 'react';
import axios from 'axios'
import reducer from "./reducer"
import React from 'react';


import {CHANGE_VALUE,GET_MOVIES, DISPLAY_ALERT,
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
}  from "./actions"



const AppContext = createContext();



export const State = {
  searchValue:"Avatar",
  data:[],
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null 
}
export function AppWrapper({ children }) {
    const [state, dispatch] = React.useReducer(reducer, State)
   
  
    const displayAlert = () => {
      dispatch({ type: DISPLAY_ALERT });
      clearAlert();
    };
  
    const clearAlert = () => {
      setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
      }, 3000);
    };
  
    const setupUser = async ({ currentUser, endPoint, alertText }) => {
      dispatch({ type: SETUP_USER_BEGIN });
      try {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/auth/${endPoint}`,
          currentUser,
          { withCredentials: true }
        );

        // const req = await fetch( `http://localhost:5000/api/v1/auth/${endPoint}` , {
        //   method : "POST",
        //   credentials : "include", // to send httpOnly cockie
        //    headers: {
        //      "Content-Type": "application/json",
        //      "Access-Control-Allow-Credentials": true,
        //    },
        //    body : JSON.stringify(currentUser)
        //   })
        //   let data=await req.json()
        
        const { user, location } = data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { user, location, alertText },
        });
      } catch (error) {
        dispatch({
          type: SETUP_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
      clearAlert();
    };
    const toggleSidebar = () => {
      dispatch({ type: TOGGLE_SIDEBAR });
    };
  
    const logoutUser = async () => {
      await axios.get('http://localhost:5000/api/v1/auth/logout', { withCredentials: true });
      dispatch({ type: LOGOUT_USER });
    };
    const updateUser = async (currentUser) => {
      dispatch({ type: UPDATE_USER_BEGIN });
      try {
        const { data } = await authFetch.patch('/auth/updateUser', currentUser);
        const { user, location } = data;
  
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { user, location },
        });
      } catch (error) {
        if (error.response.status !== 401) {
          dispatch({
            type: UPDATE_USER_ERROR,
            payload: { msg: error.response.data.msg },
          });
        }
      }
      clearAlert();
    };
  
    const handleChange = ({ name, value }) => {
      dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    };
 

    function value(value){
        dispatch({type:CHANGE_VALUE,payload:{data:value}})
    }

    function callMovies(data){
       dispatch({GET_MOVIES,payload:{data:data}})
    }


    const getCurrentUser = async () => {
      dispatch({ type: GET_CURRENT_USER_BEGIN });
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/auth/getCurrentUser', { withCredentials: true });
       
        const { user, location } = data;
  
        dispatch({
          type: GET_CURRENT_USER_SUCCESS,
          payload: { user, location },
        });
      } catch (error) {
        // if (error.response.status === 401) return;
        // logoutUser();
      }
    };
    useEffect(() => {
      getCurrentUser();
    }, []);

  return (
    <AppContext.Provider value={{...state,value,callMovies,  displayAlert,
      setupUser,
      toggleSidebar,
      logoutUser,
      updateUser,
      handleChange,}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

