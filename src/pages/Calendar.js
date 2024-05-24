import React from 'react';

const Calendar = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hijrah Calendar</h1>
      <div className="bg-gray-200 p-6 rounded-md">
        <div className="grid grid-cols-7 gap-2 mb-4">
          <div className="text-sm font-bold text-gray-600">Sun</div>
          <div className="text-sm font-bold text-gray-600">Mon</div>
          <div className="text-sm font-bold text-gray-600">Tue</div>
          <div className="text-sm font-bold text-gray-600">Wed</div>
          <div className="text-sm font-bold text-gray-600">Thu</div>
          <div className="text-sm font-bold text-gray-600">Fri</div>
          <div className="text-sm font-bold text-gray-600">Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {/* Render calendar days here */}
          <div className="text-center py-2 rounded-md">1</div>
          <div className="text-center py-2 rounded-md">2</div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;