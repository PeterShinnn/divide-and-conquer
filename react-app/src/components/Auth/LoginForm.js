import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    
    const data = await dispatch(login(email, password));
    
    if (data) setErrors(data);
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  
  if (user) return <Redirect to='/' />;

  return (
    <div className="log-in-form-container">
      <form className="log-in-form" onSubmit={onLogin}>
        <h2 className="log-in-title">Log in to your account</h2>
        <div className="errors-container">
          {errors.map((error, ind) => (
            <div className="single-error" key={ind}>{error}</div>
          ))}
        </div>
        <div className="email-inputs">
          <label className="email-label label" htmlFor='email'>Email</label>
          <input
            className='email-input input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="password-inputs">
          <label className="password-label label" htmlFor='password'>Password</label>
          <input
            className='password-input input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button className='login-btn' type='submit'>Login →</button>
      </form>
    </div>
  );
};

export default LoginForm;
