import React, { Component } from 'react';
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({submitForm, setLoginOrSignup, loginOrSignup}) => {
    
    const {handleChange, values, handleSubmit, errors}=useForm(submitForm,validate);
    


    function handleClickHere(){
        setLoginOrSignup(!loginOrSignup);
    }

    return ( 
        <div className="form-content-right">
            <form className="form">

                <h1>Let's get started! 
                    Create your account by filling out the information below
                </h1>

                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                       UserName
                    </label>
                    <input id="username" type="text" name="username" className="form-input" placeholder="Enter your username" onChange={handleChange} value={values.username}></input>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                     Email  
                    </label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="Enter your email" onChange={handleChange} value={values.email}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                     Password  
                    </label>
                    <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" onChange={handleChange} value={values.password}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                     Confirm Password  
                    </label>
                    <input id="password2" type="password" name="password2" className="form-input" placeholder="Confirm your password" onChange={handleChange} value={values.password2}></input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button className="form-input-btn" type="submit" onClick={handleSubmit}>Sign Up</button>

                <span className="form-input-login">Already have an account? Login <a href="#" onClick={handleClickHere}>here</a></span>

            </form>

        </div>
     );
}
 
export default FormSignup;