import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import IntakePage from './pages/IntakePage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="intake" element={<IntakePage />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;