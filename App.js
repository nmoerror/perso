import React, { Fragment, useState } from 'react';
import AppNavigator from './navigator/AppNavigator';
import LoginScreen from './screens/LoginScreen';

//Redux
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(true);
  };

  return (
    <Provider store={store}>
      {auth ? <AppNavigator /> : <LoginScreen handleAuth={handleAuth} />}
    </Provider>
  );
}
