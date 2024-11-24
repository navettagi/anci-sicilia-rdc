import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Check, UserPlus, AlertCircle } from 'lucide-react';

export default function CallForm() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Registra Chiamata - Comune di Palermo</CardTitle>
          <button className="flex items-center gap-2 px-3 py-1 border rounded text-sm">
            <UserPlus className="w-4 h-4" />
            Nuovo Contatto
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Contatto Esistente */}
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-medium">Contatto Attuale</h4>
            <p className="text-sm mt-1">Mario Rossi - Assessore Cultura</p>
            <p className="text-sm">☎️ Comune: 091 123456 int. 23</p>
            <p className="text-sm">✉️ m.rossi@comune.palermo.it</p>
          </div>

          {/* Esito Chiamata */}
          <div>
            <label className="block text-sm font-medium mb-1">Esito Chiamata</label>
            <select className="w-full p-2 border rounded">
              <option>Interessato - Invia Link</option>
              <option>Da Richiamare</option>
              <option>Non Interessato</option>
              <option>Non Disponibile - Contattare altro referente</option>
            </select>
          </div>

          {/* Canale Preferito con Validazione WhatsApp */}
          <div>
            <label className="block text-sm font-medium mb-1">Canale Preferito</label>
            <div className="space-y-3">
              {/* Opzione WhatsApp */}
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="channel" className="mr-2" />
                  <span>WhatsApp</span>
                </label>
                
                {/* Form Numero WhatsApp */}
                <div className="ml-6 border rounded p-3 bg-gray-50">
                  <div className="flex gap-2 mb-2">
                    <input 
                      type="text" 
                      placeholder="Inserisci numero cellulare" 
                      className="flex-1 p-2 border rounded"
                    />
                    <button className="px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Verifica
                    </button>
                  </div>
                  
                  {/* Stato Verifica (success) */}
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="w-4 h-4" />
                    Numero WhatsApp verificato
                  </div>
                  
                  {/* Stato Verifica (error) */}
                  {/*
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    Numero non associato a WhatsApp
                  </div>
                  */}
                </div>
              </div>

              {/* Opzione Email */}
              <label className="flex items-center">
                <input type="radio" name="channel" className="mr-2" />
                <span>Email (m.rossi@comune.palermo.it)</span>
              </label>
            </div>
          </div>

          {/* Note Chiamata */}
          <div>
            <label className="block text-sm font-medium mb-1">Note Chiamata</label>
            <textarea 
              className="w-full p-2 border rounded" 
              rows={2}
              placeholder="Note brevi sulla chiamata..."
            ></textarea>
          </div>

          {/* Azioni */}
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 border rounded">
              Annulla
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Registra e Invia Link
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}