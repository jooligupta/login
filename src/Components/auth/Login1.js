import React,{useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Login1 = ({ login, otp_send }) => {
const getUserRole = localStorage.getItem("role");

  const [formData, setFormData] = useState({
    to: "",
    role: getUserRole,
  });
  const { to, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(to,role)
  }
    return(
      <>
<div class="container">
    <div class="row mt-5">
   
                   <form onSubmit={(e) => onSubmit(e)}>

                    <div className="form-group">

                        <input 
                          type="text" 
                          className="form-control" 
                          id="exampleEmailText1" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Mobile Number"
                          onChange={(e) => onChange(e)}

                          />
                    </div>


                    <div className="form-group">
                      <button className="btn btn-primary btn-block" >Login</button>
                    </div>

                    </form>
                    </div>
                
</div>
</>
    )
    }; 
    Login1.prototype = {
      login: PropTypes.func.isRequired,
      otp_send: PropTypes.bool,
      // user: PropTypes.func.isRequired,
    };
    
    const mapStateToProps = (state) => ({
      otp_send: state.auth.otp_send,
      user : (state.auth.user || {}).role
    
    });
    
    export default connect (mapStateToProps, { Login1 })(Login1);