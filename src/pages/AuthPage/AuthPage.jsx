import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  return (
    <>
      <h2 className="welcome">Welcome Ali!</h2>
      <hr />
      <LoginForm setUser={setUser} />
    </>
  );
}