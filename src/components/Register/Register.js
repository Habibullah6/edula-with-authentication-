import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const Register = () => {
    const {handleRegister, setUser, handleEmailVerify} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail =  (e) => {
        setEmail(e.target.value)
        
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          alert("Email is Valid");
        } else if (!regEx.test(email) && email !== "") {
          alert("Email is Not Valid");
        } else {
          alert("");
        }
      };
    
      
   

    const handleRegistration = (e) =>{
        e.preventDefault()
        emailValidation()
        handleRegister(email, password)
        .then(result => {
            
            setUser(result.user);
            handleEmailVerify()
        })
        .catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className='p-5 m-5 border border-secondary rounded'>
                <p>please register: </p>
                <form onSubmit={handleRegistration}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={handlePassword} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">register</button>
                </form><br/>
                <p>already register? <NavLink to="/login">login here</NavLink></p>
            </div>
        </div>
    );
};

export default Register;