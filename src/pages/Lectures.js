import React from 'react';

const Lectures = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lectures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Lecture 1</h2>
          <p>Description of Lecture 1</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Watch</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Lecture 2</h2>
          <p>Description of Lecture 2</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Watch</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Lecture 3</h2>
          <p>Description of Lecture 3</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Lectures;