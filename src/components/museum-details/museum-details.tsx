import React, { useState } from 'react';
import { Building, Clock, Ticket, Users, Info, ChevronRight, ChevronLeft } from 'lucide-react';

interface MuseumDetailsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function MuseumDetails({ onPrevious, onNext }: MuseumDetailsProps) {
  const [activeTab, setActiveTab] = useState('info');
  const [museum, setMuseum] = useState({
    name: '',
    description: '',
    ticketFull: '',
    ticketReduced: '',
    schedule: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '10:00', close: '19:00' },
      sunday: { open: '10:00', close: '19:00' }
    },
    reducedCategories: [],
    freeCategories: []
  });

  const defaultCategories = {
    reduced: [
      'Ragazzi 11-16 anni accompagnati',
      'Cittadini locali',
      'Over 65',
      'Gruppi turistici (15-40 persone)',
      'Studenti universitari'
    ],
    free: [
      'Bambini fino a 10 anni accompagnati',
      'Scuole locali',
      'Diversamente abili',
      'Guide turistiche in servizio',
      'Personale comunale'
    ]
  };

  const [suggestions, setSuggestions] = useState({
    visible: false,
    text: 'Suggerimento AI: Descrivi caratteristiche uniche del museo, storia dell\'edificio e collezioni principali.'
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Comune di Palermo</h1>
              <p className="text-gray-500">Step 2: Dettagli Museo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white">✓</span>
            <span className="text-green-600">Contatti</span>
            <span className="flex-1 h-1 bg-blue-600"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">2</span>
            <span className="font-medium">Contenuti</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">3</span>
            <span className="text-gray-500">Foto</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b px-6 py-3">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'info' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Informazioni Base
                </div>
              </button>
              <button
                onClick={() => setActiveTab('tickets')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'tickets' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4" />
                  Biglietti
                </div>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'schedule' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Orari
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'info' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome del Museo</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={museum.name}
                    onChange={(e) => setMuseum({...museum, name: e.target.value})}
                    placeholder="es. Polo Museale A. Cordici"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Descrizione</label>
                  <div className="relative">
                    <textarea
                      className="w-full p-2 border rounded h-40"
                      value={museum.description}
                      onChange={(e) => setMuseum({...museum, description: e.target.value})}
                      placeholder="Descrivi il museo, le sue collezioni e la sua storia..."
                    />
                    {suggestions.visible && (
                      <div className="mt-2 p-3 bg-green-50 rounded-lg text-sm text-green-700">
                        <Info className="w-4 h-4 inline-block mr-2" />
                        {suggestions.text}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Biglietto Intero (€)</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={museum.ticketFull}
                      onChange={(e) => setMuseum({...museum, ticketFull: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Biglietto Ridotto (€)</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={museum.ticketReduced}
                      onChange={(e) => setMuseum({...museum, ticketReduced: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Categorie Ridotte</h4>
                  <div className="space-y-2">
                    {defaultCategories.reduced.map((category, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={museum.reducedCategories.includes(category)}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...museum.reducedCategories, category]
                              : museum.reducedCategories.filter(c => c !== category);
                            setMuseum({...museum, reducedCategories: updated});
                          }}
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Categorie Gratuite</h4>
                  <div className="space-y-2">
                    {defaultCategories.free.map((category, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={museum.freeCategories.includes(category)}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...museum.freeCategories, category]
                              : museum.freeCategories.filter(c => c !== category);
                            setMuseum({...museum, freeCategories: updated});
                          }}
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-6">
                {Object.entries(museum.schedule).map(([day, hours]) => (
                  <div key={day} className="flex items-center space-x-4">
                    <span className="w-24 font-medium capitalize">{day}</span>
                    <div className="flex items-center space-x-2">
                      <input
                        type="time"
                        className="p-2 border rounded"
                        value={hours.open}
                        onChange={(e) => setMuseum({
                          ...museum,
                          schedule: {
                            ...museum.schedule,
                            [day]: { ...hours, open: e.target.value }
                          }
                        })}
                      />
                      <span>-</span>
                      <input
                        type="time"
                        className="p-2 border rounded"
                        value={hours.close}
                        onChange={(e) => setMuseum({
                          ...museum,
                          schedule: {
                            ...museum.schedule,
                            [day]: { ...hours, close: e.target.value }
                          }
                        })}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => window.location.href = '/onboarding'}
            className="flex items-center gap-2 px-4 py-2 border rounded text-gray-600"
          >
            <ChevronLeft className="w-4 h-4" />
            Indietro
          </button>
          <button
            onClick={() => window.location.href = '/museum-photos'}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Avanti
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}