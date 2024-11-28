import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Phone, Search, CheckCircle, UserPlus, Filter, MessageCircle, Mail } from 'lucide-react';

// Rest of the component code remains exactly the same
export default function CommunicationHub() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con Tabs */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-screen-2xl px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Gestione Comunicazioni</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Nuova Chiamata
              </button>
            </div>
          </div>
          
          <div className="flex space-x-6 border-b">
            <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">
              Today Works
            </button>
            <button className="px-4 py-2 text-gray-500">
              Registrazione Chiamata
            </button>
            <button className="px-4 py-2 text-gray-500">
              Storico Comunicazioni
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="mx-auto max-w-screen-2xl px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Today Works - Lista comuni da contattare con Quick Actions */}
          <div className="col-span-3">
            <Card className="h-[calc(100vh-180px)] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Today Works</CardTitle>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">15 comuni</span>
                </div>
              </CardHeader>
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cerca comune..."
                    className="pl-10 w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-auto">
                <div className="divide-y">
                  {/* Lista comuni con quick actions */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-4 hover:bg-blue-50">
                      <div className="flex justify-between items-start mb-2">
                        <div className="cursor-pointer">
                          <h3 className="font-medium">Comune di Palermo</h3>
                          <div className="text-sm text-gray-500 mt-1">
                            <p>Mario Rossi</p>
                            <p>📞 091 123456</p>
                          </div>
                        </div>
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                          Priorità Alta
                        </span>
                      </div>
                      
                      {/* Quick Action Buttons */}
                      <div className="flex gap-2 mt-2">
                        <button 
                          className="flex-1 py-1 px-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-md text-sm flex items-center justify-center gap-1 transition-colors"
                          title="Invia messaggio SMS"
                        >
                          <MessageCircle className="w-3 h-3" />
                          SMS
                        </button>
                        <button 
                          className="flex-1 py-1 px-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md text-sm flex items-center justify-center gap-1 transition-colors"
                          title="Invia email"
                        >
                          <Mail className="w-3 h-3" />
                          Email
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Area Centrale - Form Registrazione */}
          <div className="col-span-6">
            <Card className="h-[calc(100vh-180px)] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle>Registrazione Chiamata</CardTitle>
                  <button className="flex items-center gap-2 px-3 py-1 border rounded text-sm">
                    <UserPlus className="w-4 h-4" />
                    Nuovo Contatto
                  </button>
                </div>
              </CardHeader>
              <div className="flex-1 overflow-auto p-6">
                <div className="space-y-6">
                  {/* Contatto Selezionato */}
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-medium">Comune di Palermo</h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>👤 Mario Rossi - Assessore Cultura</p>
                      <p>☎️ Comune: 091 123456 int. 23</p>
                      <p>✉️ m.rossi@comune.palermo.it</p>
                    </div>
                  </div>

                  {/* Form Elements */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Esito Chiamata</label>
                      <select className="w-full p-2 border rounded">
                        <option>Interessato - Invia Link</option>
                        <option>Da Richiamare</option>
                        <option>Non Interessato</option>
                        <option>Non Disponibile</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Canale Preferito</label>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="radio" name="channel" className="mr-2" />
                            <span>SMS</span>
                          </label>
                          
                          <div className="ml-6 border rounded p-3 bg-gray-50">
                            <div className="flex gap-2">
                              <input 
                                type="text" 
                                placeholder="Numero SMS" 
                                className="flex-1 p-2 border rounded"
                              />
                              <button className="px-3 py-2 bg-blue-600 text-white rounded">
                                Verifica
                              </button>
                            </div>
                          </div>
                        </div>

                        <label className="flex items-center">
                          <input type="radio" name="channel" className="mr-2" />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Note Chiamata</label>
                      <textarea 
                        className="w-full p-2 border rounded" 
                        rows={4}
                        placeholder="Note dettagliate sulla chiamata..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 border rounded">
                    Annulla
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">
                    Registra e Invia Link
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Colonna Destra - Storico */}
          <div className="col-span-3">
            <Card className="h-[calc(100vh-180px)] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Storico Chiamate</CardTitle>
                  <button className="p-1">
                    <Filter className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </CardHeader>
              <div className="flex-1 overflow-auto">
                <div className="divide-y">
                  {/* Timeline attività */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-4 hover:bg-gray-50">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Comune di Palermo</p>
                          <p className="text-sm text-gray-600">Link inviato via SMS</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">Mario Rossi</span>
                            <span className="text-xs text-gray-500">14:30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 