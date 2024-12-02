import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import OnboardingPortal from './components/onboarding/OnboardingPortal';
import CommunicationHub from './components/communication/CommunicationHub';
import ANCIDashboard from './components/dashboard/ANCIDashboard';
import KanbanBoard from './components/kanban/kanban';
import MuseumDetails from './components/museum-details/museum-details';
import MuseumPhotos from './components/museum-photos/museum-photos';
import Anagrafica from './components/anagrafica/anagrafica';
import DettaglioScheda from './components/dettaglio-scheda/dettaglio-scheda';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<KanbanBoard />} />
            <Route path="/communication" element={<CommunicationHub />} />
            <Route path="/onboarding" element={<OnboardingPortal />} />
            <Route path="/dashboard" element={<ANCIDashboard />} />
            <Route path="/contact-management" element={<OnboardingPortal />} />
            <Route path="/museum-details" element={<MuseumDetails />} />
            <Route path="/museum-photos" element={<MuseumPhotos />} />
            <Route path="/anagrafica" element={<Anagrafica />} />
            <Route path="/dettaglio-scheda" element={<DettaglioScheda />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;