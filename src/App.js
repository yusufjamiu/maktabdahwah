// App.js
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
import MosquesBuilt from './pages/home/MosquesBuilt';
import BoreHole from './pages/home/BoreHole';
import Iftar from './pages/home/Iftar';
import EmpowermentProgram from './pages/home/EmpowermentProgram';
import Donate from './pages/home/Donate';
import Yoruba from './pages/lectures/Yoruba';
import English from './pages/lectures/English';
import Arabic from './pages/lectures/Arabic';
import RamadanSchedule from './pages/ramadan/RamadanSchedule';
import RamadanActivities from './pages/ramadan/RamadanActivities';
import RamadanResources from './pages/ramadan/RamadanResources';
import QuranRecitation from './pages/quran/QuranRecitation';
import QuranTranslation from './pages/quran/QuranTranslation';
import QuranTafsir from './pages/quran/QuranTafsir';
import UpcomingEvents from './pages/events/UpcomingEvents';
import PastEvents from './pages/events/PastEvents';
import RegisterEvent from './pages/events/RegisterEvent';
import ApplyScholarship from './pages/scholarship/ApplyScholarship';
import ScholarshipRequirements from './pages/scholarship/ScholarshipRequirements';
import ScholarshipRecipients from './pages/scholarship/ScholarshipRecipients';
import Alaro from './pages/lectures/yoruba/Alaro';
import SheikhNaj from './pages/lectures/yoruba/SheikhNaj';
import DrGbadebo from './pages/lectures/yoruba/DrGbadebo';
import Jabata from './pages/lectures/yoruba/Jabata';
import DrHabeebAdewuyi from './pages/lectures/yoruba/DrHabeebAdewuyi';
import DrHabeeb from './pages/lectures/yoruba/DrHabeeb';
import SheikhRidwan from './pages/lectures/yoruba/SheikhRidwan';
import DrSanusi from './pages/lectures/yoruba/DrSanusi';
import Amubieya from './pages/lectures/yoruba/Amubieya';
import Sekoni from './pages/lectures/yoruba/Sekoni';

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
              <Route path="/lectures/yoruba" element={<Yoruba />} />
              <Route path="/lectures/english" element={<English />} />
              <Route path="/lectures/arabic" element={<Arabic />} />
              <Route path="/ramadan/schedule" element={<RamadanSchedule />} />
              <Route path="/ramadan/activities" element={<RamadanActivities />} />
              <Route path="/ramadan/resources" element={<RamadanResources />} />
              <Route path="/quran/recitation" element={<QuranRecitation />} />
              <Route path="/quran/translation" element={<QuranTranslation />} />
              <Route path="/quran/tafsir" element={<QuranTafsir />} />
              <Route path="/events/upcoming" element={<UpcomingEvents />} />
              <Route path="/events/past" element={<PastEvents />} />
              <Route path="/events/register" element={<RegisterEvent />} />
              <Route path="/scholarships/apply" element={<ApplyScholarship />} />
              <Route path="/scholarships/requirements" element={<ScholarshipRequirements />} />
              <Route path="/scholarships/recipients" element={<ScholarshipRecipients />} />
              <Route path="/lectures/alaro" element={<Alaro />} />
              <Route path="/lectures/sheikhnaj" element={<SheikhNaj />} />
              <Route path="/lectures/drgbadebo" element={<DrGbadebo />} />
              <Route path="/lectures/jabata" element={<Jabata />} />
              <Route path="/lectures/drhabeebadewuyi" element={<DrHabeebAdewuyi />} />
              <Route path="/lectures/drhabeeb" element={<DrHabeeb />} />
              <Route path="/lectures/sheikhridwan" element={<SheikhRidwan />} />
              <Route path="/lectures/drsanusi" element={<DrSanusi />} />
              <Route path="/lectures/amubieya" element={<Amubieya />} />
              <Route path="/lectures/sekoni" element={<Sekoni />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;