import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Benvenuti nel Sistema ANCI Sicilia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose">
              <p className="text-gray-600">
                Gestione integrata dei progetti ANCI Sicilia:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Rete dei Musei</li>
                <li>Protezione Civile</li>
                <li>Altri progetti in arrivo...</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;