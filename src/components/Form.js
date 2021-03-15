import React, { Component, useState } from 'react';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import FormSuccess from "./FormSuccess";
import FormLoginSuccess from "./FormLoginSuccess";

const Form = () => {

    const [isSubmitted,setIsSubmitted]= useState(false);
    let [loginOrSignup,setLoginOrSignup]=useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }


    function handleClose(){
        document.getElementById('FormContainer').style.display='none';
    }

   if (loginOrSignup===false) {
       
    return (  

       <div id="FormContainer" className="form-container">
        <span className="close-btn" onClick={handleClose} >x</span>    
                
                <div className="form-content-left">
                    <img src="img-2.svg" alt="spaceship" className="form-img"/>
                </div>
               
                {!isSubmitted ? <FormSignup submitForm={submitForm} setLoginOrSignup={setLoginOrSignup} loginOrSignup={loginOrSignup} />: <FormSuccess />}
                
                
            
        </div> 

        
       
    );
   }else{
       return(
        <div id="FormContainer" className="form-container">
        <span className="close-btn" onClick={handleClose} >x</span>    
                
                <div className="form-content-left">
                    <img src="img-2.svg" alt="spaceship" className="form-img"/>
                </div>

                {!isSubmitted ? <FormLogin submitForm={submitForm} setLoginOrSignup={setLoginOrSignup} loginOrSignup={loginOrSignup} />: <FormLoginSuccess />}

        </div>

       );
   }
}
 
export default Form;