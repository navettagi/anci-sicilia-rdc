import React from 'react';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import { Download, AlertCircle, CheckCircle, Clock, XCircle, Camera, FileText, Users } from 'lucide-react';

// Define component prop types
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
  children: React.ReactNode;
};

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

// Card Components with TypeScript types
const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`} {...props} />
);

const CardHeader: React.FC<CardHeaderProps> = ({ className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

const CardTitle: React.FC<CardTitleProps> = ({ className = "", children, ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent: React.FC<CardContentProps> = ({ className = "", ...props }) => (
  <div className={`p-6 pt-0 text-gray-600 ${className}`} {...props} />
);

// Dati sui blocchi operativi
const blockData = [
  { tipo: 'Foto Mancanti', comuni: 45, colore: '#ef4444' },
  { tipo: 'Testi Incompleti', comuni: 38, colore: '#f97316' },
  { tipo: 'In Attesa Verifica', comuni: 25, colore: '#3b82f6' },
  { tipo: 'Completati', comuni: 27, colore: '#22c55e' }
];

export default function ANCIDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Operativa Rete dei Musei</h1>
              <p className="text-gray-500">Aggiornato: 22 Nov 2024, 15:30</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* KPI Cards Focused on Operational Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Camera className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Blocco Foto</h3>
                  <p className="text-2xl font-bold text-red-600">45</p>
                  <p className="text-sm text-gray-500">Comuni bloccati</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Blocco Testi</h3>
                  <p className="text-2xl font-bold text-orange-600">38</p>
                  <p className="text-sm text-gray-500">Testi incompleti</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Da Verificare</h3>
                  <p className="text-2xl font-bold text-blue-600">25</p>
                  <p className="text-sm text-gray-500">In attesa review</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Status Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Comuni da Sbloccare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-medium text-red-700 mb-2">Priorità Alta</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Palermo</span>
                      <span>Bloccato da 30+ giorni</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Catania</span>
                      <span>Bloccato da 25 giorni</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Messina</span>
                      <span>Bloccato da 20 giorni</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded">
                  <h4 className="font-medium text-orange-700 mb-2">Da Supportare</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Agrigento</span>
                      <span>Necessita aiuto foto</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Siracusa</span>
                      <span>Necessita aiuto testi</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blocchi Operativi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart width={500} height={300} data={blockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tipo" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="comuni" fill="#3b82f6" />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comuni Table with Focus on Blocks */}
        <Card>
          <CardHeader>
            <CardTitle>Comuni da Seguire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Comune</th>
                    <th className="pb-2">Blocco Attuale</th>
                    <th className="pb-2">Responsabile</th>
                    <th className="pb-2">Giorni Bloccato</th>
                    <th className="pb-2">Azioni</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3">Palermo</td>
                    <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded">Foto Mancanti</span></td>
                    <td>Mario Rossi</td>
                    <td>32 giorni</td>
                    <td><button className="text-blue-600">Contatta</button></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Catania</td>
                    <td><span className="px-2 py-1 bg-orange-100 text-orange-600 rounded">Testi Incompleti</span></td>
                    <td>Giuseppe Verdi</td>
                    <td>25 giorni</td>
                    <td><button className="text-blue-600">Contatta</button></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Messina</td>
                    <td><span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">In Verifica</span></td>
                    <td>Anna Bianchi</td>
                    <td>20 giorni</td>
                    <td><button className="text-blue-600">Contatta</button></td>
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