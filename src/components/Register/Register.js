import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const Register = () => {
    const {handleRegister, setUser, handleEmailVerify, updateProfile, auth} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleEmail =  (e) => {
        setEmail(e.target.value)
        
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
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
            console.log(result);
            setUser(result.user);
            handleEmailVerify();
            setUserName()
        })
        .catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className='p-5  border border-secondary rounded'>
                <p>Please register:</p>
                <form onSubmit={handleRegistration}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input onBlur={handleNameChange} type="text" className="form-control" id='exampleInputName'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id='exampleInputEmail1'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={handlePassword} className="form-control" id='exampleInputPassword1'/>
                    </div>
                    <button type="submit" className="btn btn-primary">register</button>
                </form><br/>
                <p>already register? <NavLink to="/login">login here</NavLink></p>
            </div>
        </div>
    );
};

export default Register;