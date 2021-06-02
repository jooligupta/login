import Home from "./Components/Home"
import{Route,BrowserRouter as Router} from "react-router-dom"
import Header from "./Components/Header"
import Mainpage from "./Components/Mainpage"
import Footer from "./Components/Footer"
function App(props) {
  return (
    <Router>
    <Route strict exact component={Home} path="/home" history={props.history}></Route>
    <Route strict exact component={Footer} path="/footer" history={props.history}></Route>
    <Route strict exact component={Mainpage} path="/mainpage" history={props.history}></Route>
    <Route strict exact component={Header} path="/header" history={props.history}></Route>
    </Router>
  );
}

export default App;
