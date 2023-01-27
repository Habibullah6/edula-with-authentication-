import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({children, ...rest }) => {
    const {user, loading, setLoading} = useAuth();

    
    
    if(loading){
      return <p className='text-center'>Loading........</p>
    }
    
    
    
    
    return (
      <Route
      {...rest}
      render={({ location }) =>
        user?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
              
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;