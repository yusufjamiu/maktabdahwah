import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
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