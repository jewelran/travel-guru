import React from 'react';
import './Login.css'
import Header from '../Header/Header';
import { Checkbox } from '@material-ui/core';

const LoginForm = () => {
    const [checked, setChecked] = React.useState(false);
      
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
return (
    <div className="">
        <Header></Header>
        <div className='login-Container'>
            <div className="login-wrapper">
                <h2>Login</h2>
                <br/>
                <input placeholder =' Username or Email' type="text"/><br/> <br/>
                <input placeholder =" Password" type="password" name="" id=""/> <br/>
                <div className="">
                <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps ={{ 'aria-label': 'uncontrolled-checkbox' }}
                /><span>Remember Me</span> 
                <a href="http://">
                <span className  = 'forgetPassword'> forget password?</span>
                </a>
                
                </div>
                <div className="">
                    <input className =' login-btn' value="Login" type="button"/>
                    <br/>
                    <span>Don't have an account?</span>
                    <a href="">
                    <span className = 'create-acc'>Create an account</span> 
                    </a>
                </div>
            </div>
            
            <p>ok</p>
            <div className="">
                
                <p>Continue with Facebook</p>
            </div>
            <div  className="">
                <p>Countinue with  Google</p>
            </div>

    </div>
    </div>
    
);
};


export default LoginForm;