import React,{useState} from "react";
import './style.css';
export default function Home(props){
   const[show,setshow]=useState(false)
   function handleshow(){
   setshow(!show)
   }
   return(
       <div>
    <header id="number-section">
        <div class="mobile-inner container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="heading">
                        <h1 class="display-10">Great, Lorenzo,<br></br>
                        everthing is ready.</h1>
                    </div>
                    <div class="paragraph">
                        <p>You will recieve a conformation mobile soon <br></br>with your booking details</p>
                    </div>
                    <div class="row cols-8">
                        <div class="col">
                            <div class="group">
                                <span>Airport drop off</span>
                                <h5>Dubai International , T1</h5>
                            </div>
    
                            <div class="group">
                                <span>Pick up localtion</span>
                                <h5>Hajar Rd, 315 Rd</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="group">
                                <span>Airport drop off</span>
                                <h5>Dubai International , T1</h5>
                            </div>
    
                            <div class="group">
                                <span>Pick up localtion</span>
                                <h5>Hajar Rd, 315 Rd</h5>
                            </div>
                        </div>
                      
                        </div>
                        <div class="row cols-8">
                        
                        <div class="col">
                            
                                <div class="form-group">
                                    <input type="text" class="form-control bringonbtn shadow" placeholder="Mobile Number"/>
                                </div>
                            
                        </div>

                        <div class="col">
                        <input type="button" onClick={handleshow} class="btn btn-btn-danfer bringonbtn bringonredbtn bg-bringon shadow" value="GET OTP" data-toggle="modal" data-target="#staticBackdrop-modal-lg"/>
                        </div>
                       
                    </div>
                   
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="img">
                        <img src="./images/forlogin.jpg" alt="" width="120%"/>
            </div>
                            </div>
                    </div>
                    </div>
</header>

<div class="modal fade" show={show}  id="staticBackdrop-modal-lg" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            
            <div class="modal-body">
              <div class="row">
                  <div class="col-lg-8">
                    <div class="heading">
                        <h4 class="display-10">Enter verification code</h4>
                    </div>

                    <div class="paragraph">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing<br></br> elit. Vitae laborum eveniet</p>
                    </div>
                    <div class="otp section d-flex">
                        <input type="text" class="form-control otp shadow" autofocus="" maxlength="1"/>
                        <input type="text" class="form-control otp shadow" maxlength="1"/>
                        <input type="text" class="form-control otp shadow" maxlength="1"/>
                        <input type="text" class="form-control otp shadow" maxlength="1"/>
                    </div>
                    <div class="mt-5 aginsection">
                        <span class="d-block">Send the code again</span>
                        <span class="d-block">Change phone number</span>
                    </div>
                    <div class="button">
                        <div class="form-group">
                            <input type="button" class="btn btn-block btn-btn-danfer bringonbtnlogin bringonredbtn bg-bringon shadow" value="Login/Signup"/>
                        </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                    <img class="otpimg" src="./images/forotp.jpg"/>
                  </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
  );
   }
