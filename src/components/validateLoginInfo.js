export default function validateLoginInfo(values){

    let errors={};
    
    if(!values.username.trim()){ //trim() deals with whitespaces
        errors.username="Username required";
    }

    if(!values.password){
        errors.password="Password is required";
    }else if(values.password.length <6){
        errors.password="Password needs to be 6 characters or more";
    }


    return errors;


}