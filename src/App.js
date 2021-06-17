import React,{useEffect} from 'react';
import Home from "./Components/Home"
import{Route,BrowserRouter as Router} from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import Footer from "./Components/Footer"
import Login1 from "./Components/auth/Login1"
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App(props){
  return (
    <Provider store={store}>
    <Router>
    <Route strict exact component={Home} path="/home" history={props.history}></Route>
    <Route strict exact component={Footer} path="/footer" history={props.history}></Route>
    <Route strict exact component={Login} path="/login" history={props.history}></Route>
    <Route strict exact component={Header} path="/header" history={props.history}></Route>
    <Route strict exact component={Login1} path="/login1" history={props.history}></Route>
    </Router>
    </Provider>
  );
}

export default App;
