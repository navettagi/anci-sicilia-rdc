import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar } from 'recharts';
import { Download, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

// Dati per il grafico forecast
const forecastData = [
  { mese: 'Nov', completati: 100, forecast: 100 },
  { mese: 'Dic', completati: 115, forecast: 115 },
  { mese: 'Gen', completati: 130, forecast: 130 },
  { mese: 'Feb', completati: 145, forecast: 150 },
  { mese: 'Mar', forecast: 175 },
  { mese: 'Apr', forecast: 200 },
  { mese: 'Mag', forecast: 230 },
  { mese: 'Giu', forecast: 254 } // Target 65% di 391 comuni
];

// Dati per il grafico stato attuale
const statusData = [
  { stato: 'Completati', valore: 45, colore: '#22c55e' },
  { stato: 'In Corso', valore: 78, colore: '#3b82f6' },
  { stato: 'Non Aderenti', valore: 156, colore: '#ef4444' },
  { stato: 'Dormienti', valore: 112, colore: '#f97316' }
];

export default function ANCIDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Rete dei Musei</h1>
              <p className="text-gray-500">Aggiornato: 22 Nov 2024, 15:30</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded">
              <Download className="w-4 h-4" />
              <span>Export Dati</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Completati</h3>
                  <p className="text-2xl font-bold text-green-600">145</p>
                  <p className="text-sm text-gray-500">37% del totale</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">In Corso</h3>
                  <p className="text-2xl font-bold text-blue-600">78</p>
                  <p className="text-sm text-gray-500">20% del totale</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Dormienti</h3>
                  <p className="text-2xl font-bold text-orange-600">112</p>
                  <p className="text-sm text-gray-500">29% del totale</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Non Aderenti</h3>
                  <p className="text-2xl font-bold text-red-600">156</p>
                  <p className="text-sm text-gray-500">40% del totale</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Forecast Adesioni</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <LineChart width={500} height={300} data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mese" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="completati" 
                    stroke="#22c55e" 
                    name="Completati" 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="forecast" 
                    stroke="#3b82f6" 
                    name="Previsione" 
                    strokeDasharray="5 5" 
                  />
                </LineChart>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded text-sm text-blue-600">
                Target: 254 comuni (65% di 391) entro Giugno 2024
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stato Corrente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart width={500} height={300} data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stato" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="valore" fill="#3b82f6" />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comuni Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista Comuni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Comune</th>
                    <th className="pb-2">Provincia</th>
                    <th className="pb-2">Stato</th>
                    <th className="pb-2">Ultimo Update</th>
                    <th className="pb-2">Azioni</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3">Palermo</td>
                    <td>PA</td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded">Completato</span></td>
                    <td>20 Nov 2024</td>
                    <td><button className="text-blue-600">Dettagli</button></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Catania</td>
                    <td>CT</td>
                    <td><span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">In Corso</span></td>
                    <td>21 Nov 2024</td>
                    <td><button className="text-blue-600">Dettagli</button></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Messina</td>
                    <td>ME</td>
                    <td><span className="px-2 py-1 bg-orange-100 text-orange-600 rounded">Dormiente</span></td>
                    <td>15 Nov 2024</td>
                    <td><button className="text-blue-600">Dettagli</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}