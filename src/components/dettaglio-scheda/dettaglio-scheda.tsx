import { useState } from "react";

export default function MuseumCardDetail({ onBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [museum, setMuseum] = useState({
    name: 'Museo Archeologico Comunale',
    comune: 'Palermo',
    status: 'raccolta_materiali',
    description: [
      'Nato nel 1688 sulla Rua Nova, odierna via Garibaldi, Palazzo Milo, appartenuto ',
      'alla famiglia Saura, a quella dei Milo, degli Augugliaro e dei Pappalardo, e ',
      'successivamente acquistato dalla Regione Siciliana, è oggi una delle due sedi ',
      'istituzionali della Soprintendenza per i beni culturali e ambientali di Trapani. ',
      'La mostra, realizzata con il contributo della Soprintendenza del Mare e del ',
      'Comando dei Carabinieri tutela patrimonio culturale di Palermo, raccoglie anfore ',
      'da trasporto e manufatti, provenienti per lo più da sequestri giudiziari e ',
      'cessioni volontarie, ed è visibile unicamente dalle ampie vetrine su via Garibaldi. ',
      'Le anfore selezionate (cipriote, puniche, magnogreco siceliote, romano-repubblicane, ',
      'imperiali, tardoantiche, bizantine, medievali) sono l\'esempio più diretto di ',
      'manufatti ceramici che danno informazioni sulle diverse fabbricazioni, produzioni ',
      'e datazioni, sulle forme, sulle capienze e sulla metrologia, visto che le anfore ',
      'sono anche misure di capacità. Originariamente erano destinate al trasporto ',
      'marittimo a lunga distanza di derrate alimentari di largo uso, sicuramente ',
      'deperibili ma facilmente smerciabili e vendibili, quali il vino, l\'olio, le ',
      'conserve di pesce, il pesce salato o in salamoia, le olive, i legumi, la frutta, ',
      'il miele, il latte e probabilmente anche alcune tipologie di carni.'
    ].join(''),
    photos: [
      { id: 1, url: '/images/facciata.jpg', description: 'Facciata principale', main: true },
      { id: 2, url: '/images/sala.jpg', description: 'Sala espositiva A', main: false },
      { id: 3, url: '/images/anfore.jpg', description: 'Collezione anfore', main: false }
    ],
    lastUpdate: '2 ore fa',
    contact: {
      name: 'Mario Rossi',
      role: 'Assessore alla Cultura',
      email: 'm.rossi@comune.palermo.it',
      phone: '091 123456'
    }
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-gray-500 hover:text-gray-700"
            >
              ←
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900">{museum.comune}</h1>
                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  Raccolta Materiali
                </span>
              </div>
              <p className="text-gray-500">Ultimo aggiornamento: {museum.lastUpdate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Foto del Museo
                </h2>
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
                  + Aggiungi Foto
                  <input type="file" className="hidden" onChange={e => console.log('Upload:', e.target.files)} multiple accept="image/*" />
                </label>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {museum.photos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <img 
                      src={photo.url} 
                      alt={photo.description}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                      <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100">
                        ✎
                      </button>
                      <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100">
                        ×
                      </button>
                      {!photo.main && (
                        <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100">
                          ✓
                        </button>
                      )}
                    </div>
                    {photo.main && (
                      <span className="absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs rounded">
                        Principale
                      </span>
                    )}
                    <p className="mt-2 text-sm text-gray-600">{photo.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Descrizione
                </h2>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  ✎
                </button>
              </div>

              {isEditing ? (
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={6}
                  value={museum.description}
                  onChange={(e) => setMuseum({ ...museum, description: e.target.value })}
                />
              ) : (
                <p className="text-gray-600">{museum.description}</p>
              )}

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium mb-3">Contatta il referente</h3>
                
                <div className="mb-4">
                  <textarea
                    placeholder="Scrivi il tuo messaggio qui..."
                    className="w-full p-3 border rounded-lg text-sm resize-none"
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => window.location.href = `mailto:${museum.contact.email}`}
                    className="flex-1 flex items-center justify-center gap-2 p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                  >
                    Invia Email
                  </button>
                  <button 
                    onClick={() => window.location.href = `sms:${museum.contact.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 p-2 bg-green-50 text-green-600 rounded hover:bg-green-100"
                  >
                    Invia SMS
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Referente: {museum.contact.name} - {museum.contact.role}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                Condividi
              </h2>
              <div className="space-y-3">
                <button 
                  onClick={() => console.log('Sharing via email')}
                  className="w-full flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-50"
                >
                  Invia per Email
                </button>
                <button className="w-full flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-50">
                  Esporta PDF
                </button>
                <button className="w-full flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-50">
                  Link Pubblico
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Referente</h2>
              <div className="space-y-2">
                <p className="font-medium">{museum.contact.name}</p>
                <p className="text-gray-600">{museum.contact.role}</p>
                <p className="text-sm text-gray-500">{museum.contact.email}</p>
                <p className="text-sm text-gray-500">{museum.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}