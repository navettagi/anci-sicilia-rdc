import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Camera, FileText, CheckCircle, Image, SendHorizontal, AlertCircle } from 'lucide-react';

export default function OnboardingPortal() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Comune di Palermo</h1>
              <p className="text-gray-500">Portale Adesione Rete dei Musei</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">Bozza salvata</span>
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
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Foto</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span>Descrizioni</span>
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
            {/* Foto Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Foto del Museo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed rounded-lg p-4 text-center">
                      <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">Foto Esterno</p>
                      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm">Carica</button>
                    </div>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center bg-green-50 border-green-200">
                      <Image className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p className="text-sm text-green-600">Foto Interno (Caricata)</p>
                      <button className="mt-2 px-4 py-2 border border-green-600 text-green-600 rounded text-sm">Modifica</button>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded text-sm text-blue-600">
                    <p>✓ Formato: JPG o PNG</p>
                    <p>✓ Dimensione minima: 1200x800px</p>
                    <p>✓ Peso massimo: 5MB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Descrizione Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Descrizione Museo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome del Museo</label>
                    <input type="text" className="w-full p-2 border rounded" value="Museo Archeologico Comunale" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrizione Breve
                      <span className="ml-2 text-green-600">(IA: Migliora testo)</span>
                    </label>
                    <textarea 
                      className="w-full p-2 border rounded" 
                      rows={3}
                      placeholder="Inserisci una breve descrizione..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrizione Completa
                      <span className="ml-2 text-green-600">(IA: Suggerisci contenuti)</span>
                    </label>
                    <textarea 
                      className="w-full p-2 border rounded" 
                      rows={6}
                      placeholder="Inserisci una descrizione dettagliata..."
                    ></textarea>
                  </div>

                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-medium text-green-700 mb-2">Suggerimenti IA</h4>
                    <p className="text-sm text-green-600 mb-2">Aggiungi queste informazioni per migliorare la descrizione:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Periodo storico principale</li>
                      <li>• Tipologia di reperti esposti</li>
                      <li>• Collegamenti con la storia locale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assistenza</CardTitle>
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

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Orari assistenza:</p>
                    <p className="text-sm">Lun-Ven: 9:00-17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Suggerimenti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>✓ Salvataggio automatico attivo</p>
                  <p>✓ Puoi completare in più sessioni</p>
                  <p>✓ Usa l'IA per migliorare i testi</p>
                  <p>✓ Chiedi aiuto in qualsiasi momento</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}