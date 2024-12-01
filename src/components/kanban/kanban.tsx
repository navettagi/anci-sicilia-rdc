import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Phone, Mail, Search, MoreVertical, Plus, AlertCircle } from 'lucide-react';

// Mock data structure
const initialCards = {
  da_contattare: [
    { id: 1, comune: "Palermo", days: 0, priority: "alta", contacts: [{name: "Mario Rossi", role: "Assessore Cultura", phone: "091 123456"}] },
    { id: 2, comune: "Catania", days: 0, priority: "media", contacts: [{name: "Giuseppe Verdi", role: "Direttore Museo", phone: "095 654321"}] },
    { id: 3, comune: "Messina", days: 0, priority: "bassa", contacts: [{name: "Anna Bianchi", role: "Resp. Cultura", phone: "090 111222"}] }
  ],
  in_contatto: [
    { id: 4, comune: "Agrigento", days: 3, priority: "alta", contacts: [{name: "Paolo Neri", role: "Assessore", phone: "092 333444"}] },
    { id: 5, comune: "Siracusa", days: 5, priority: "media", contacts: [{name: "Laura Verdi", role: "Direttore", phone: "093 555666"}] }
  ],
  adesione_formale: [
    { id: 6, comune: "Ragusa", days: 2, priority: "bassa", contacts: [{name: "Marco Blu", role: "Resp. Museo", phone: "097 777888"}] }
  ],
  raccolta_materiali: [
    { id: 7, comune: "Trapani", days: 7, priority: "alta", contacts: [{name: "Sara Rosa", role: "Coordinatore", phone: "091 999000"}] }
  ],
  completati: [
    { id: 8, comune: "Marsala", days: 15, priority: "media", contacts: [{name: "Luca Gialli", role: "Assessore", phone: "091 112233"}] }
  ]
};

const MoveConfirmDialog = ({ isOpen, onClose, onConfirm, card, fromColumn, toColumn }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Conferma Spostamento</h3>
        <p className="text-gray-600 mb-4">
          Vuoi spostare {card?.comune} da "{fromColumn}" a "{toColumn}"?
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Annulla
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default function KanbanBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDrag, setCurrentDrag] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [targetColumn, setTargetColumn] = useState(null);
  const [cards, setCards] = useState(initialCards);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-600';
      case 'media':
        return 'bg-orange-100 text-orange-600';
      case 'bassa':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleDragStart = (card) => {
    setCurrentDrag(card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newColumn) => {
    e.preventDefault();
    if (!currentDrag) return;
    
    setTargetColumn(newColumn);
    setShowDialog(true);
  };

  const handleConfirmMove = () => {
    const oldColumn = Object.keys(cards).find(column => 
      cards[column].some(card => card.id === currentDrag.id)
    );

    if (oldColumn === targetColumn) {
      setShowDialog(false);
      setCurrentDrag(null);
      setTargetColumn(null);
      return;
    }

    setCards(prevCards => ({
      ...prevCards,
      [oldColumn]: prevCards[oldColumn].filter(card => card.id !== currentDrag.id),
      [targetColumn]: [...prevCards[targetColumn], {...currentDrag, days: 0}]
    }));

    setShowDialog(false);
    setCurrentDrag(null);
    setTargetColumn(null);
  };

  const Column = ({ title, cards, count, accentColor }) => (
    <div 
      className="flex flex-col w-72 bg-gray-50 rounded-lg p-2"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, title.toLowerCase().replace(/ /g, '_'))}
    >
      <div className="flex items-center justify-between mb-2 px-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className={`text-sm px-2 py-0.5 rounded ${accentColor}`}>{count}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-3 rounded shadow-sm border border-gray-100 cursor-move hover:shadow-md transition-shadow"
              draggable
              onDragStart={() => handleDragStart(card)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{card.comune}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(card.priority)}`}>
                    {card.priority}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              {card.contacts.map((contact, idx) => (
                <div key={idx} className="mt-2 text-sm text-gray-600">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.role}</p>
                  <div className="flex gap-2 mt-1">
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      <Phone className="w-3 h-3" />
                      <span className="text-xs">{contact.phone}</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {card.days > 0 && (
                <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                  <AlertCircle className="w-3 h-3" />
                  <span>{card.days} giorni in questa colonna</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Rete dei Musei</h1>
              <p className="text-gray-500">Wave 1 - Gestione Adesioni</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Nuova Chiamata
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca comune..."
              className="pl-10 w-full p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Dialog */}
        <MoveConfirmDialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onConfirm={handleConfirmMove}
          card={currentDrag}
          fromColumn={Object.keys(cards).find(column => 
            cards[column].some(card => card.id === currentDrag?.id)
          )}
          toColumn={targetColumn}
        />

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Column 
            title="Da Contattare" 
            cards={cards.da_contattare}
            count={cards.da_contattare.length}
            accentColor="bg-gray-100 text-gray-600"
          />
          <Column 
            title="In Contatto" 
            cards={cards.in_contatto}
            count={cards.in_contatto.length}
            accentColor="bg-blue-100 text-blue-600"
          />
          <Column 
            title="Adesione Formale" 
            cards={cards.adesione_formale}
            count={cards.adesione_formale.length}
            accentColor="bg-purple-100 text-purple-600"
          />
          <Column 
            title="Raccolta Materiali" 
            cards={cards.raccolta_materiali}
            count={cards.raccolta_materiali.length}
            accentColor="bg-orange-100 text-orange-600"
          />
          <Column 
            title="Completati" 
            cards={cards.completati}
            count={cards.completati.length}
            accentColor="bg-green-100 text-green-600"
          />
        </div>
      </div>
    </div>
  );
}