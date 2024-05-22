import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 mt-4">
          {/* Main content goes here */}
          <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
          <p>This is the main content area.</p>
          {/* Add more content here to enable scrolling */}
          <div className="h-[700px]">More content...</div>
        </div>
      </div>
    </div>
  );
};

export default App;
