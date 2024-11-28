import React, { useState, ReactNode } from 'react';
import { 
  Camera, FileText, CheckCircle, Image, SendHorizontal, 
  AlertCircle, Users, Calendar, Clock, Book, Link,
  HelpCircle 
} from 'lucide-react';

// Types
interface CardProps {
  children: ReactNode;
  className?: string;
}

interface PhotoStatus {
  isTemporary: boolean;
  photographer: string;
  expectedDate: string;
  status: string;
}

interface Collaborators {
  mainContact: string;
  photoResponsible: string;
  textResponsible: string;
  reviewers: string[];
}

// Card Components
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardProps> = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Main Component
export default function OnboardingPortal() {
  const [photoStatus, setPhotoStatus] = useState<PhotoStatus>({
    isTemporary: false,
    photographer: '',
    expectedDate: '',
    status: 'da_assegnare'
  });

  const [collaborators] = useState<Collaborators>({
    mainContact: 'Mario Rossi',
    photoResponsible: 'Giuseppe Verdi',
    textResponsible: 'Anna Bianchi',
    reviewers: ['Paolo Neri']
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Comune di Palermo</h1>
                <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">Bozza salvata</span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Team: {collaborators.mainContact} + 3
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Deadline: 15 Dec 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Ultimo update: 2h fa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Dati Base</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span>Foto (2/5)</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span>Descrizioni (In Progress)</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-gray-300" />
              <span>Revisione</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Form Area */}
          <div className="col-span-2 space-y-6">
            {/* Photo Section */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>Foto del Museo</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Temporary Photos Section */}
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-medium mb-2">Foto Temporanee</h4>
                    <div className="flex items-center mb-3">
                      <input 
                        type="checkbox" 
                        checked={photoStatus.isTemporary}
                        onChange={(e) => setPhotoStatus({...photoStatus, isTemporary: e.target.checked})}
                        className="mr-2"
                      />
                      <span className="text-sm">Questa è una foto temporanea da sostituire</span>
                    </div>
                    <p className="text-sm text-blue-600">
                      Non hai ancora le foto definitive? Carica delle foto provvisorie per procedere.
                      Le potrai sostituire in seguito.
                    </p>
                  </div>

                  {/* Photo Upload Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed rounded-lg p-4 text-center">
                      <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">Foto Esterno</p>
                      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm">Carica</button>
                    </div>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center bg-green-50 border-green-200">
                      <Image className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p className="text-sm text-green-600">Foto Interno (Caricata)</p>
                      <div className="mt-2 space-y-1">
                        <button className="w-full px-4 py-2 border border-green-600 text-green-600 rounded text-sm">
                          Modifica
                        </button>
                        <button className="w-full px-4 py-1 text-sm text-gray-500">
                          Aggiungi nota
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Photo Assignment Section */}
                  <div className="border rounded p-4">
                    <h4 className="font-medium mb-3">Gestione Incarico Foto</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm mb-1">Responsabile Foto</label>
                        <select 
                          className="w-full p-2 border rounded"
                          value={photoStatus.photographer}
                          onChange={(e) => setPhotoStatus({...photoStatus, photographer: e.target.value})}
                        >
                          <option value="">Seleziona responsabile...</option>
                          <option value="interno">Personale Interno</option>
                          <option value="esterno">Fotografo Esterno</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Data Prevista Completamento</label>
                        <input 
                          type="date" 
                          className="w-full p-2 border rounded"
                          value={photoStatus.expectedDate}
                          onChange={(e) => setPhotoStatus({...photoStatus, expectedDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Stato Incarico</label>
                        <select 
                          className="w-full p-2 border rounded"
                          value={photoStatus.status}
                          onChange={(e) => setPhotoStatus({...photoStatus, status: e.target.value})}
                        >
                          <option value="da_assegnare">Da Assegnare</option>
                          <option value="assegnato">Assegnato</option>
                          <option value="in_corso">In Corso</option>
                          <option value="completato">Completato</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Text Section */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Descrizione Museo</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Guided Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome del Museo
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded" 
                        defaultValue="Museo Archeologico Comunale" 
                      />
                    </div>

                    <div className="space-y-4 border-l-4 border-blue-200 pl-4">
                      <h4 className="font-medium">Informazioni Base</h4>
                      <div>
                        <label className="block text-sm mb-1">Periodo storico principale</label>
                        <select className="w-full p-2 border rounded">
                          <option>Seleziona periodo...</option>
                          <option>Preistoria</option>
                          <option>Epoca Greca</option>
                          <option>Epoca Romana</option>
                          <option>Medioevo</option>
                          <option>Moderno</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Reperti principali (max 3)</label>
                        <div className="space-y-2">
                          <input type="text" className="w-full p-2 border rounded" placeholder="Reperto 1" />
                          <input type="text" className="w-full p-2 border rounded" placeholder="Reperto 2" />
                          <input type="text" className="w-full p-2 border rounded" placeholder="Reperto 3" />
                        </div>
                      </div>
                    </div>

                    {/* Sources Section */}
                    <div className="border rounded p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Book className="w-4 h-4" />
                        Fonti Disponibili
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Link className="w-4 h-4 text-blue-500" />
                          <input 
                            type="url" 
                            className="flex-1 p-2 border rounded" 
                            placeholder="URL pagina web esistente"
                          />
                          <button className="px-3 py-2 text-blue-600">+</button>
                        </div>
                        <button className="w-full p-2 border border-dashed rounded text-gray-500">
                          + Carica documento/brochure
                        </button>
                      </div>
                    </div>

                    {/* AI Suggestions */}
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-medium text-green-700 mb-2">Suggerimenti IA</h4>
                      <p className="text-sm text-green-600 mb-2">Aggiungi queste informazioni per migliorare la descrizione:</p>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Eventi storici significativi legati al museo</li>
                        <li>• Collegamenti con la storia locale</li>
                        <li>• Dettagli sull'architettura dell'edificio</li>
                        <li>• Informazioni sulle collezioni permanenti</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Help Section */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5" />
                    <span>Assistenza</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center space-x-2 p-2 bg-green-600 text-white rounded">
                    <SendHorizontal className="w-4 h-4" />
                    <span>Chiedi Aiuto WhatsApp</span>
                  </button>
                  
                  <div className="text-sm space-y-2">
                    <p className="font-medium">Contatti diretti:</p>
                    <p>☎️ 091 123456</p>
                    <p>📧 supporto@ancisicilia.it</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}