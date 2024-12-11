import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { PostTask } from './pages/PostTask';
import { FindWork } from './pages/FindWork';
import { Profile } from './pages/Profile';
import { WorkerProfile } from './pages/WorkerProfile';
import { IssuerProfile } from './pages/IssuerProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-task" element={<PostTask />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/worker-profile/:id" element={<WorkerProfile />} />
          <Route path="/issuer-profile/:id" element={<IssuerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}