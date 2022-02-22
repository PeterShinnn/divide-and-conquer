import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [full_name, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    
    const data = await dispatch(signUp(full_name, username, email, password));
    
    if (data) {
      if (Array.isArray(data)){
        if (password !== repeatPassword) {
          console.log(errors)
          data.push("password: Password must match")
        }
        setErrors(data)
      }
      setPassword("")
      setRepeatPassword("")
    }
  };

  const updateFullname = (e) => setFullname(e.target.value);
  const updateUsername = (e) => setUsername(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRepeatPassword = (e) => setRepeatPassword(e.target.value);

  if (user) {
    return <Redirect to='/taskboard' />;
  }

  return (
    <div className="entire-sign-up-form-container">
      <form autoComplete="off" className="sign-up-form-container" onSubmit={onSignUp}>
        <h2>Get Started</h2>
        <div>
          {errors.map((error, ind) => (
            <div key={ind} className="sign-up-error">{error}</div>
          ))}
        </div>
        <div className="input-form-item">
          <label>Full Name</label>
          <input
            className="form-input"
            type='text'
            name='full_name'
            onChange={updateFullname}
            value={full_name}
          ></input>
        </div>
        <div className="input-form-item">
          <label>User Name</label>
          <input
            className="form-input"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="input-form-item">
          <label>Email</label>
          <input
            className="form-input"
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="input-form-item">
          <label>Password</label>
          <input
            className="form-input"
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="input-form-item">
          <label>Repeat Password</label>
          <input
            className="form-input"
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
        </div>
        <button className="sign-up-btn" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
