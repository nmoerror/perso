import React, { Fragment, useState } from 'react';
import Login from '../components/Login/Login';
import Signup from '../components/Login/Signup';

const LoginScreen = props => {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(login => {
      setLogin(!login);
    });
  };

  return (
    <Fragment>
      {login ? (
        <Login toggle={toggleLogin} setAuth={props.handleAuth} />
      ) : (
        <Signup toggle={toggleLogin} />
      )}
    </Fragment>
  );
};

export default LoginScreen;
