import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//import ProtectedRoute from './components/Auth/ProtectedRoute';
import SignUpForm from './components/Auth/SignUpForm';
//import LoginForm from './components/Auth/LoginForm';
import SignInPage from './components/Signin/SignIn';
import SigninNavBar from './components/NavBar/SigninNavBar';
//import UsersList from './components/UsersList';
import { authenticate } from './store/session';
import SplashPage from './components/Splash/SplashPage';
import NavBar from './components/NavBar/NavBar'
//import User from './components/User';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
    setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <NavBar />
          <SplashPage />
        </Route>
        <Route path='/login' exact={true}>
          <SigninNavBar />
          <SignInPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
