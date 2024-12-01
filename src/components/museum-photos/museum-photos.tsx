import React, { useState } from 'react';
import { Upload } from 'lucide-react';

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

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const reorderPhotos = (fromIndex: number, toIndex: number) => {
    const updated = [...photos];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setPhotos(updated);
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
            <span className="text-gray-500">Contatti</span>
            <span className="flex-1 h-1 bg-gray-200"></span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">3</span>
            <span className="font-medium">Foto</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        {/* Photo Upload Section */}
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

        {/* Photos Display Section */}
        {photos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow mt-6">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Foto {index + 1}</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => index > 0 && reorderPhotos(index, index - 1)}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                  >
                    ↑
                  </button>
                  <button 
                    onClick={() => index < photos.length - 1 && reorderPhotos(index, index + 1)}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded"
                  >
                    ↓
                  </button>
                  <button 
                    onClick={() => removePhoto(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    ×
                  </button>
                </div>
              </div>

              <img 
                src={URL.createObjectURL(photo.file)} 
                alt={`Foto ${index + 1}`} 
                className="w-full h-60 object-cover rounded-lg"
              />

              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Descrizione</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={3}
                    value={photo.description}
                    onChange={e => handleDescriptionChange(index, e.target.value)}
                    placeholder="Descrivi cosa mostra questa foto..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Tags</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="es. esterno, facciata, ingresso"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MuseumPhotos;