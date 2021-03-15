import React, { Component } from 'react';
import useForm from "./useForm";
import validate from "./validateLoginInfo";


const FormLogin = ({submitForm, setLoginOrSignup, loginOrSignup}) => {

    const {handleChange, values, handleSubmit, errors}=useForm(submitForm,validate);


    function handleClickHere(){
        setLoginOrSignup(!loginOrSignup);
    }

    return (  

        <div className="form-content-right">

            <h1 className="login-heading">Login</h1>

            <form className="form">

            

            <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                       UserName
                    </label>
                    <input id="username" type="text" name="username" className="form-input" placeholder="Enter your username" onChange={handleChange} value={values.username}></input>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                     Password  
                    </label>
                    <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" onChange={handleChange} value={values.password}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button className="form-input-btn" type="submit" onClick={handleSubmit}>Login</button>

                <span className="form-input-login">Don't have an account? Signup <a href="#" onClick={handleClickHere}> here</a></span>

            </form>

        </div>


    );
}
 
export default FormLogin;

