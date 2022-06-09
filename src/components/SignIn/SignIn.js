import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const SignIn = () => {
    
    const {handleEmailPasswordSignIn, setUser, handleGoogleSignIn} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail =  (e) => {
        setEmail(e.target.value)
        
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailPasswordLogIn = (e) => {
        e.preventDefault()
         handleEmailPasswordSignIn(email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            alert('successfully log in');
            console.log(user);
         })
         .catch(error => {
             alert(error.message)
         })

    }
    
    let history = useHistory();
    let location = useLocation();
    const redirect_Uri = location.state?.from || '/home';
    
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
        .then(result => {
            setUser(result.user)
            history.push(redirect_Uri)
        })
        .catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className='p-5 m-5 border border-secondary rounded'>
                
                <p>Email Password Login:</p>
                <div>
                    <form onSubmit={handleEmailPasswordLogIn}>
                        <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">login</button>
                    </form>
                </div>
                <br/>
                <p>Or google login:</p>
                <button onClick={signInUsingGoogle} className='btn btn-success mb-5'>Google login</button>
                <br/>
                <p>New user in this website? <NavLink to="/register">register please</NavLink> </p>
            </div>
        </div>
    );
};

export default SignIn;