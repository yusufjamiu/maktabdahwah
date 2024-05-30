import React from 'react';
import mosque1 from '../assets/Maktab.JPG';
import mosque2 from '../assets/Maktab.JPG';
import mosque3 from '../assets/Maktab.JPG';
import mosque4 from '../assets/Maktab.JPG';
import mosque5 from '../assets/Maktab.JPG';

const MosquesBuilt = () => {
  const mosques = [
    { name: 'Al-maktab Mosque', location: 'Lagos, Nigeria', imam: 'Sheikh Habeebullah Yusuf Adewuyi', image: mosque1 },
    { name: 'Darul Quran Mosque', location: 'Lagos, Nigeria', imam: 'Sheikh Habeebullah Agbabiaka', image: mosque2 },
    { name: 'Imaamain Mosque', location: 'Ilorin, Nigeria', imam: 'Sheikh ', image: mosque3 },
    { name: 'Bilal Mosque', location: 'Oyo, Nigeria', imam: 'Sheikh', image: mosque4 },
    { name: 'Abubakr Siddeeq Mosque', location: 'Lagos, Nigeria', imam: 'Sheikh', image: mosque5 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mosques Built</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mosques.map((mosque, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-md">
            <img src={mosque.image} alt={mosque.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{mosque.name}</h2>
            <p className="mb-2">Location: {mosque.location}</p>
            <p>Imam: {mosque.imam}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosquesBuilt;