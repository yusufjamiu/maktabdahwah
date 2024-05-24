import React from 'react';

const Events = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Event 1</h2>
          <p>Description of Event 1</p>
          <p className="text-sm text-gray-600">Date: May 15, 2023</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Event 2</h2>
          <p>Description of Event 2</p>
          <p className="text-sm text-gray-600">Date: June 20, 2023</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Event 3</h2>
          <p>Description of Event 3</p>
          <p className="text-sm text-gray-600">Date: July 10, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Events;