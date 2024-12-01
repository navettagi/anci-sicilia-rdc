import React, { useState } from 'react';
import { ChevronLeft, Upload } from 'lucide-react';

interface Photo {
  file: File;
  description: string;
}

const MuseumPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [currentDescription, setCurrentDescription] = useState<string>('');

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setCurrentFile(file);
    }
  };

  const handleAddPhoto = () => {
    if (currentFile) {
      const newPhoto = { file: currentFile, description: currentDescription };
      setPhotos([...photos, newPhoto]);
      setCurrentFile(null);
      setCurrentDescription('');
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentDescription(event.target.value);
  };

  const handleComplete = () => {
    // Handle completion logic here (e.g., save photos to a server)
    console.log("Photos submitted:", photos);
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
                      <input id="photos" name="photos" type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                    </label>
                    {currentFile && (
                      <p className="pl-2">{currentFile.name}</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF fino a 10MB</p>
                  {currentFile && (
                    <>
                      <label htmlFor="description" className="block text-sm font-medium mt-2">Descrizione</label>
                      <textarea
                        id="description"
                        className="w-full p-2 border rounded"
                        rows={3}
                        value={currentDescription}
                        onChange={handleDescriptionChange}
                      />
                    </>
                  )}
                  <button
                    onClick={handleAddPhoto}
                    className="mt-3 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                    disabled={!currentFile}
                  >
                    Aggiungi Foto
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {photos.map((photo, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <img src={URL.createObjectURL(photo.file)} alt={`Foto ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
                <p className="mt-2 text-gray-700">{photo.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <a
              href="/museum-details"
              className="flex items-center gap-2 px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Precedente
            </a>
            <button
              onClick={handleComplete}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={photos.length === 0}
            >
              Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuseumPhotos;