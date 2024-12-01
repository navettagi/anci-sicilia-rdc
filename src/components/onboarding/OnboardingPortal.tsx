import React, { useState } from 'react';
import { 
  Users, Plus, Trash2, ChevronRight,
  Building, Phone, Mail, Camera, Book
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Contact {
  id: string;
  nome: string;
  ruolo: string;
  tipo: string;
  telefono: string;
  email: string;
  competenze: string[];
}

const OnboardingPortal = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      nome: 'Mario Rossi',
      ruolo: 'Assessore alla Cultura',
      tipo: 'politico',
      telefono: '091 123456',
      email: 'm.rossi@comune.palermo.it',
      competenze: ['coordinamento', 'autorizzazioni']
    },
    {
      id: '2',
      nome: 'Giuseppe Verdi',
      ruolo: 'Responsabile Ufficio Cultura',
      tipo: 'dipendente',
      telefono: '091 654321',
      email: 'g.verdi@comune.palermo.it',
      competenze: ['gestione_museo', 'organizzazione']
    }
  ]);

  const [newContact, setNewContact] = useState<Partial<Contact>>({
    tipo: 'dipendente'
  });

  const competenzeOptions = [
    { id: 'coordinamento', label: 'Coordinamento Generale' },
    { id: 'autorizzazioni', label: 'Autorizzazioni' },
    { id: 'gestione_museo', label: 'Gestione Museo' },
    { id: 'fotografia', label: 'Fotografia' },
    { id: 'contenuti', label: 'Gestione Contenuti' },
    { id: 'tecnico', label: 'Supporto Tecnico' },
    { id: 'organizzazione', label: 'Organizzazione Eventi' }
  ];

  const handleAddContact = () => {
    if (newContact.nome && newContact.ruolo) {
      setContacts([...contacts, { 
        ...newContact as Contact,
        id: Date.now().toString(),
        competenze: newContact.competenze || []
      }]);
      setNewContact({ tipo: 'dipendente' });
    }
  };

  const handleRemoveContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/museum-details');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Comune di Palermo</h1>
              <p className="text-gray-500">Step 1: Gestione Contatti</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">1</span>
            <span className="font-medium">Contatti</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">2</span>
            <span className="text-gray-500">Musei</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">3</span>
            <span className="text-gray-500">Contenuti</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Lista Contatti */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contatti Registrati
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{contact.nome}</h4>
                          <p className="text-sm text-gray-500">{contact.ruolo}</p>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              {contact.telefono}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              {contact.email}
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {contact.competenze.map((comp) => (
                              <span key={comp} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                                {competenzeOptions.find(o => o.id === comp)?.label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button 
                          onClick={() => handleRemoveContact(contact.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Nuovo Contatto */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Nuovo Contatto
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipo Contatto</label>
                    <select 
                      className="w-full p-2 border rounded"
                      value={newContact.tipo}
                      onChange={(e) => setNewContact({...newContact, tipo: e.target.value})}
                    >
                      <option value="dipendente">Dipendente Comunale</option>
                      <option value="politico">Assessore/Consigliere</option>
                      <option value="esterno">Professionista Esterno</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Nome e Cognome</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded"
                      value={newContact.nome || ''}
                      onChange={(e) => setNewContact({...newContact, nome: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Ruolo</label>
                    <input 
                      type="text"
                      className="w-full p-2 border rounded"
                      value={newContact.ruolo || ''}
                      onChange={(e) => setNewContact({...newContact, ruolo: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Telefono</label>
                    <input 
                      type="tel"
                      className="w-full p-2 border rounded"
                      value={newContact.telefono || ''}
                      onChange={(e) => setNewContact({...newContact, telefono: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email"
                      className="w-full p-2 border rounded"
                      value={newContact.email || ''}
                      onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Competenze</label>
                    <div className="space-y-2">
                      {competenzeOptions.map((opt) => (
                        <label key={opt.id} className="flex items-center">
                          <input 
                            type="checkbox"
                            className="mr-2"
                            checked={newContact.competenze?.includes(opt.id) || false}
                            onChange={(e) => {
                              const current = newContact.competenze || [];
                              setNewContact({
                                ...newContact,
                                competenze: e.target.checked 
                                  ? [...current, opt.id]
                                  : current.filter(c => c !== opt.id)
                              });
                            }}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleAddContact}
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Aggiungi Contatto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-end mt-8">
          <div className="bg-white rounded-lg shadow p-4 max-w-xl w-full">
            <div className="flex items-center justify-between">
              <span>Tutti i contatti necessari sono stati inseriti?</span>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Prossimo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPortal;