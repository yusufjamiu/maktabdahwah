// App.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-20 sm:ml-60">
        <Navbar />
        {/* Main content goes here */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;