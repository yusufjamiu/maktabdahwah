import React from 'react';

const Scholarships = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Scholarship 1</h2>
          <p>Description of Scholarship 1</p>
          <a href="https://sajjel.me" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Scholarship 2</h2>
          <p>Description of Scholarship 2</p>
          <a href="www.ksu.sa" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Scholarship 3</h2>
          <p>Description of Scholarship 3</p>
          <a href="www.sajjel.me" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;