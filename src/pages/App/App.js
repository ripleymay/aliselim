import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WrittenPage from '../WrittenPage/WrittenPage';
import SpokenPage from '../SpokenPage/SpokenPage';
import VisualPage from '../VisualPage/VisualPage';
import ContactPage from '../ContactPage/ContactPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/written" element={<WrittenPage />} />
            <Route path="/spoken" element={<SpokenPage />} />
            <Route path="/visual" element={<VisualPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
        {/* <AuthPage setUser={setUser} /> */}
    </main>
  );
}
