import React, { useState, useEffect } from 'react';
import { 
  Search, Users, Building2, ChevronDown, 
  ChevronRight, Filter, Download, Upload,
  Phone, Mail, Plus, Trash2 
} from 'lucide-react';

interface Comune {
  id: string;
  nome: string;
  provincia: string;
  popolazione: number;
}

interface Contact {
  id: string;
  comuneId: string;
  nome: string;
  ruolo: string;
  tipo: string;
  telefono: string;
  email: string;
  competenze: string[];
}

const ComuniContacts = () => {
  const [selectedComune, setSelectedComune] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [comuni, setComuni] = useState<Comune[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredComuni, setFilteredComuni] = useState<Comune[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [provinciaFilter, setProvinciaFilter] = useState<string>('');

  const province = ['Agrigento', 'Caltanissetta', 'Catania', 'Enna', 'Messina', 
                   'Palermo', 'Ragusa', 'Siracusa', 'Trapani'];

  const competenzeOptions = [
    { id: 'coordinamento', label: 'Coordinamento Generale' },
    { id: 'autorizzazioni', label: 'Autorizzazioni' },
    { id: 'gestione_museo', label: 'Gestione Museo' },
    { id: 'fotografia', label: 'Fotografia' },
    { id: 'contenuti', label: 'Gestione Contenuti' },
    { id: 'tecnico', label: 'Supporto Tecnico' },
    { id: 'organizzazione', label: 'Organizzazione Eventi' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const dummyComuni: Comune[] = [
        { id: '1', nome: 'Palermo', provincia: 'Palermo', popolazione: 673735 },
        { id: '2', nome: 'Catania', provincia: 'Catania', popolazione: 311584 },
        { id: '3', nome: 'Messina', provincia: 'Messina', popolazione: 232555 }
      ];
      
      const dummyContacts: Contact[] = [
        {
          id: '1',
          comuneId: '1',
          nome: 'Roberto Lagalla',
          ruolo: 'Sindaco',
          tipo: 'politico',
          telefono: '091 7401111',
          email: 'sindaco@comune.palermo.it',
          competenze: ['coordinamento', 'autorizzazioni']
        },
        {
          id: '2',
          comuneId: '1',
          nome: 'Maria Terranova',
          ruolo: 'Assessore alla Cultura',
          tipo: 'politico',
          telefono: '091 7404800',
          email: 'm.terranova@comune.palermo.it',
          competenze: ['gestione_museo', 'organizzazione']
        },
        {
          id: '3',
          comuneId: '2',
          nome: 'Enrico Trantino',
          ruolo: 'Sindaco',
          tipo: 'politico',
          telefono: '095 7421111',
          email: 'sindaco@comune.catania.it',
          competenze: ['coordinamento']
        },
        {
          id: '4',
          comuneId: '2',
          nome: 'Giuseppe Romano',
          ruolo: 'Dirigente Settore Cultura',
          tipo: 'dipendente',
          telefono: '095 7428000',
          email: 'g.romano@comune.catania.it',
          competenze: ['gestione_museo', 'contenuti']
        },
        {
          id: '5',
          comuneId: '3',
          nome: 'Federico Basile',
          ruolo: 'Sindaco',
          tipo: 'politico',
          telefono: '090 7721111',
          email: 'sindaco@comune.messina.it',
          competenze: ['coordinamento', 'autorizzazioni']
        },
        {
          id: '6',
          comuneId: '3',
          nome: 'Laura Costa',
          ruolo: 'Responsabile Beni Culturali',
          tipo: 'dipendente',
          telefono: '090 7727500',
          email: 'l.costa@comune.messina.it',
          competenze: ['gestione_museo', 'tecnico']
        }
      ];
      
      setComuni(dummyComuni);
      setFilteredComuni(dummyComuni);
      setContacts(dummyContacts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = comuni;
    
    if (searchTerm) {
      filtered = filtered.filter(comune => 
        comune.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (provinciaFilter) {
      filtered = filtered.filter(comune => 
        comune.provincia === provinciaFilter
      );
    }
    
    setFilteredComuni(filtered);
  }, [searchTerm, provinciaFilter, comuni]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Gestione Contatti Comuni
              </h1>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  Esporta CSV
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
                  <Upload className="w-4 h-4" />
                  Importa CSV
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="p-6 border-b">
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cerca comune..."
                    className="w-full pl-10 pr-4 py-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                Filtri
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {showFilters && (
              <div className="mt-4 p-4 border rounded-lg">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Provincia
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      value={provinciaFilter}
                      onChange={(e) => setProvinciaFilter(e.target.value)}
                    >
                      <option value="">Tutte</option>
                      {province.map(prov => (
                        <option key={prov} value={prov}>{prov}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="grid grid-cols-3 divide-x">
            {/* Comuni List */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Comuni
              </h3>
              <div className="space-y-2">
                {filteredComuni.map(comune => (
                  <button
                    key={comune.id}
                    onClick={() => setSelectedComune(comune.id)}
                    className={`w-full p-4 rounded-lg border text-left hover:bg-gray-50 ${
                      selectedComune === comune.id ? 'border-blue-500 bg-blue-50' : ''
                    }`}
                  >
                    <div className="font-medium">{comune.nome}</div>
                    <div className="text-sm text-gray-500">
                      Provincia di {comune.provincia}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contacts List */}
            <div className="col-span-2 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Contatti
              </h3>
              {selectedComune ? (
                <div className="space-y-4">
                  {contacts.filter(c => c.comuneId === selectedComune).map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50">
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
                          onClick={() => {
                            setContacts(contacts.filter(c => c.id !== contact.id));
                          }}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={() => {/* Implementare logica per aggiungere contatto */}}
                    className="w-full p-4 border rounded-lg text-center text-blue-600 hover:bg-blue-50"
                  >
                    <Plus className="w-4 h-4 inline-block mr-2" />
                    Aggiungi nuovo contatto
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  Seleziona un comune per visualizzare i contatti
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComuniContacts;