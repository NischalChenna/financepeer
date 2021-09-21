import react, { useState } from 'react';
// import { Link,useHistory } from 'react-router-dom';


function SignUp()
{
    return(
    <div className="Login">
        <h1>Sign Up Page</h1>
        <br></br>
        <label>UserName :-</label>
        <input type="text"></input>
        <br></br>
        <label>Password :-</label>
        <input type="text"></input>
    </div>);
}

export default SignUp;