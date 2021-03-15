import React, { Component, useState, useEffect } from 'react';


const useForm = (callback,validate) => {
    const [values,setValues]=useState(
        {
            username: "",
            email: "",
            password: "",
            password2: ""
        }
    );

    const [errors,setErrors]=useState({});

    const [isSubmitting,setIsSubmitting]=useState(false);
    
    const handleChange = (e)=>{
        const {name, value}= e.target;
        setValues( {...values, [name]:value} );
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
      if(Object.keys(errors).length===0 && isSubmitting){ //Object.keys(errors) will give an array of keys of errors object. Similarly Object.values() will give an array of values
          callback(); //this will invoke submitForm() defined in App.js
      }
    }, [errors])

    return {handleChange, values, handleSubmit, errors};
}
 
export default useForm;