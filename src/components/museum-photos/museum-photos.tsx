import React, { useState } from 'react';
import { ChevronLeft, Upload } from 'lucide-react';

interface Photo {
  file: File;
  description: string;
}

const MuseumPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newPhotos = Array.from(event.target.files).map(file => ({ file, description: '' }));
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    }
  };

  const handleDescriptionChange = (index: number, description: string) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].description = description;
    setPhotos(updatedPhotos);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Comune di Palermo</h1>
          <p className="text-gray-500">Step 3: Foto del Museo</p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white">✓</span>
            <span className="text-gray-500">Contatti</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white">✓</span>
            <span className="text-gray-500">Musei</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">3</span>
            <span className="font-medium">Foto</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <label htmlFor="photos" className="block text-sm font-medium mb-1">Carica Foto</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="photos"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Carica file</span>
                      <input id="photos" name="photos" type="file" accept="image/*" multiple className="sr-only" onChange={handlePhotoUpload} />
                    </label>
                    <p className="pl-1">o trascina qui</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF fino a 10MB</p>
                </div>
              </div>
            </div>
          </div>

          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <div className="p-6">
                <img src={URL.createObjectURL(photo.file)} alt={`Foto ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4">
                  <label htmlFor={`description-${index}`} className="block text-sm font-medium mb-1">
                    Descrizione Foto {index + 1}
                  </label>
                  <textarea
                    id={`description-${index}`}
                    className="w-full p-2 border rounded"
                    rows={3}
                    value={photo.description}
                    onChange={e => handleDescriptionChange(index, e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <a
              href="/museum-details"
              className="flex items-center gap-2 px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Precedente
            </a>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuseumPhotos;