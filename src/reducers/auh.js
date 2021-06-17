import {
    OTP_SEND,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    
  } from "../actions/types";
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    otp_send : false,
    user: null,
    temp: null,

  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OTP_SEND:
          return {
            ...state,
            isAuthenticated: false,
            loading: false,
            otp_send : true,
            
          };
        case LOGIN_SUCCESS:
          localStorage.setItem("token", payload.token);
          return { ...state, ...payload, isAuthenticated: true, loading: false };
    
        case LOGIN_FAIL:
    
    
        default:
          return state;
      }
    }
    