import React from 'react';

const BoreHole = () => {
  const boreHoles = [
    { location: 'Kano, Nigeria', imam: 'Imam Abubakar Mahmoud' },
    { location: 'Nairobi, Kenya', imam: 'Imam Abdul Rahman' },
    { location: 'Accra, Ghana', imam: 'Imam Yusuf Isa' },
    { location: 'Dhaka, Bangladesh', imam: 'Imam Muhammad Amin' },
    { location: 'Jakarta, Indonesia', imam: 'Imam Rizal Ahmad' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bore Holes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boreHoles.map((boreHole, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-md">
            <p className="mb-2">Location: {boreHole.location}</p>
            <p>Imam: {boreHole.imam}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoreHole;