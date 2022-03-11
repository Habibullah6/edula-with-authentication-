import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='text-center p-5 m-5'>
            <h1 className='text-danger fw-bold'>404</h1>
            <h3 className='text-primary fw-bold'>Page Not Found.</h3>
            <p className='fw-bold text-primary'>Sorry we can't find what you're looking for.</p>
            <NavLink to='/home'><button className='btn btn-danger'>go back home</button></NavLink>
        </div>
    );
};

export default Notfound;