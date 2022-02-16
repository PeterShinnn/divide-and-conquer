import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//import ProtectedRoute from './components/Auth/ProtectedRoute';
import SplashPage from './components/Splash/SplashPage';
import TaskBoard from './components/TaskBoard/TaskBoard';
import SignUpForm from './components/Auth/SignUpForm';
import SignInPage from './components/Signin/SignIn';
import NavBar from './components/NavBar/NavBar';
import { authenticate } from './store/session';

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
        <Route path='/taskboard' exact={true}>
            <TaskBoard />
        </Route>
        <Route path='/login' exact={true}>
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
