import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Quran from './pages/Quran';
import Calendar from './pages/Calendar';
import Ramadan from './pages/Ramadan';
import Scholarships from './pages/Scholarships';
import SolatTime from './pages/SolatTime';
import MosquesBuilt from './pages/MosquesBuilt';
import BoreHole from './pages/BoreHole';
import Iftar from './pages/Iftar';
import EmpowermentProgram from './pages/EmpowermentProgram';
import Donate from './pages/Donate';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto p-6 mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lectures" element={<Lectures />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/quran" element={<Quran />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/ramadan" element={<Ramadan />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/solat-time" element={<SolatTime />} />
              <Route path="/mosques-built" element={<MosquesBuilt />} />
              <Route path="/bore-hole" element={<BoreHole />} />
              <Route path="/iftar" element={<Iftar />} />
              <Route path="/empowerment-program" element={<EmpowermentProgram />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;