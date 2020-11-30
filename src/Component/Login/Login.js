import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import  './Login.css'
import Header from '../Header/Header';
import "firebase/auth"
import firebaseConfig from './FirebaseConfig';

firebase.initializeApp(firebaseConfig)
const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleSingIn =() =>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    

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
                <div onClick = {googleSingIn} className="">
                    <p>Countinue with  Google</p>
                </div>

        </div>
        </div>
        
    );
};

export default Login;