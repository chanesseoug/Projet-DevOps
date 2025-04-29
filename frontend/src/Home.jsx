import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Bienvenue sur mon portfolio</h1>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Découvrir mes projets
      </button>
    </div>
  );
}
