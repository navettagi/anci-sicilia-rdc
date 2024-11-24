import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Phone, FileText, BarChart } from 'lucide-react';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 justify-between">
          <div className="flex space-x-8">
            <button
              onClick={() => navigate('/')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>

            <button
              onClick={() => navigate('/communication')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/communication') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Comunicazioni
            </button>

            <button
              onClick={() => navigate('/onboarding')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/onboarding') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <FileText className="w-4 h-4 mr-2" />
              Onboarding
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/dashboard') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              <BarChart className="w-4 h-4 mr-2" />
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}