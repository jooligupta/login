import axios from "axios";
import {
    OTP_SEND,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    
  } from "./types";

  //Send OTP
  export const login = (to, role) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({ to, role });
  
    try {
      const res = await axios.post(
        "https://bringonstore-backend.herokuapp.com/api/v1/auth/loginviaOtp",
        body,
        config
      );
  
      localStorage.setItem('number', JSON.stringify(res.data.data))

      dispatch({
        type: OTP_SEND,
        payload: res.data,
      });
  
     
    } catch (err) {
      console.log(err.response.data);
      const errors = err.response.data.error;
      console.log(errors); 
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
  //Verify OTP
  export const register = ({ to, code,role }) => async (
    dispatch
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({ to, code,role });
  
    try {
      const res = await axios.post(
        "https://bringonstore-backend.herokuapp.com/api/v1/auth/verifyOtp",
        body,
        config
      );
      console.log(res);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
  
      
    } catch (err) {
      console.log(err.response.data);
      const errors = err.response.data.error;
      console.log(errors);
  
      
  
     
    }
  };