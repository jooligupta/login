import React from "react";
import './style.css';
export default function Home(props){
    
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
                            <input type="button" class="btn btn-btn-danfer bringonbtn bringonredbtn bg-bringon shadow" value="GET OTP" data-toggle="modal" data-target="#staticBackdrop-modal-lg"/>
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

  </div>

    
  )
}