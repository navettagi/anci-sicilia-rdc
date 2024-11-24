import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import OnboardingPortal from './components/onboarding/OnboardingPortal';
import CommunicationHub from './components/communication/CommunicationHub';
import ANCIDashboard from './components/dashboard/ANCIDashboard';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communication" element={<CommunicationHub />} />
          <Route path="/onboarding" element={<OnboardingPortal />} />
          <Route path="/dashboard" element={<ANCIDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;