import React from 'react';

const Quran = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Download Quran</h1>
      <p className="mb-6">
        Download the Holy Quran in various formats and translations for your convenience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Arabic Text</h2>
          <p>Arabic version of the Holy Quran</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Download</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">English Translation</h2>
          <p>English translation of the Holy Quran</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Download</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Audio Recitation</h2>
          <p>Audio recitation of the Holy Quran</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Quran;