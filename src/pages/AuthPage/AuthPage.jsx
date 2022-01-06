import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h2>Welcome Ali!</h2>
      <LoginForm setUser={setUser} />
    </main>
  );
}