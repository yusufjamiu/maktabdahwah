import React, { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsBook, BsCalendar, BsCalendarEvent, BsMoonStarsFill, BsMortarboardFill, BsMusicNoteList, BsHouse } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Maktab.JPG';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [homeOpen, setHomeOpen] = useState(false);
  const [lecturesOpen, setLecturesOpen] = useState(false);
  const [ramadanOpen, setRamadanOpen] = useState(false);
  const [quranOpen, setQuranOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scholarshipsOpen, setScholarshipsOpen] = useState(false);

  const toggleSubmenu = (menu) => {
    setHomeOpen(menu === 'home' ? !homeOpen : false);
    setLecturesOpen(menu === 'lectures' ? !lecturesOpen : false);
    setRamadanOpen(menu === 'ramadan' ? !ramadanOpen : false);
    setQuranOpen(menu === 'quran' ? !quranOpen : false);
    setEventsOpen(menu === 'events' ? !eventsOpen : false);
    setScholarshipsOpen(menu === 'scholarships' ? !scholarshipsOpen : false);
  };

  return (
    <div className="flex">
      <div className={`bg-slate-600 h-screen p-5 pt-8 ${open ? 'w-72 sm:w-35' : 'w-20 sm:w-15'} duration-300 relative`}>
        <BsArrowLeftShort
          className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-dark-yellow cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center">
          <img src={logoImage} alt="Logo" className={`h-16 mr-2 duration-500 ${open && 'rotate-[360deg]'}`} />
          <span className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
            MaktabNigeria
          </span>
        </div>
        <div className={`flex items-center rounded-md bg-gray-400 mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`} />
          <input
            type="search"
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
          />
        </div>
        <div className={`mt-6 ${!open && 'px-2.5'}`}>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${homeOpen && 'bg-gray-700'}`}
              onClick={() => toggleSubmenu('home')}
            >
              <BsHouse className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Home / الصفحة الرئيسية</span>
            </Link>
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${lecturesOpen && 'bg-gray-700'}`}
              onClick={() => toggleSubmenu('lectures')}
            >
              <BsMusicNoteList className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Lectures / محاضرات</span>
            </div>
            {lecturesOpen && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/lectures/yoruba" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Yoruba / يوربا
                </Link>
                <Link to="/lectures/english" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  English / انجليزية 
                </Link>
                <Link to="/lectures/arabic" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Arabic / عربية
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${ramadanOpen && 'bg-gray-700'}`}
              onClick={() => toggleSubmenu('ramadan')}
            >
              <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Ramadan / رمضان</span>
            </div>
            {ramadanOpen && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/ramadan/schedule" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Schedule / جدول
                </Link>
                <Link to="/ramadan/activities" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Activities / أنشطة
                </Link>
                <Link to="/ramadan/resources" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Resources / مصادر
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${quranOpen && 'bg-gray-700'}`}
              onClick={() => toggleSubmenu('quran')}
            >
              <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Quran / القرآن</span>
            </div>
            {quranOpen && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/quran/recitation" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Recitation / تلاوة
                </Link>
                <Link to="/quran/translation" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Translation / ترجمة
                </Link>
                <Link to="/quran/tafsir" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Tafsir / تفسير
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <div
             className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${eventsOpen && 'bg-gray-700'}`}
             onClick={() => toggleSubmenu('events')}
           >
             <BsCalendarEvent className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Events / فعاليات</span>
           </div>
           {eventsOpen && (
             <div className={`pl-6 ${!open && 'hidden'}`}>
               <Link to="/events/upcoming" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Upcoming / قادمة
               </Link>
               <Link to="/events/past" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Past / ماضية
               </Link>
               <Link to="/events/register" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Register / تسجيل
               </Link>
             </div>
           )}
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <div
             className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${scholarshipsOpen && 'bg-gray-700'}`}
             onClick={() => toggleSubmenu('scholarships')}
           >
             <BsMortarboardFill className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Scholarships / منح دراسية</span>
           </div>
           {scholarshipsOpen && (
             <div className={`pl-6 ${!open && 'hidden'}`}>
               <Link to="/scholarships/apply" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Apply / تقديم
               </Link>
               <Link to="/scholarships/requirements" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Requirements / متطلبات
               </Link>
               <Link to="/scholarships/recipients" className="block text-white hover:bg-gray-700 rounded-md p-2">
                 Recipients / المتلقين
               </Link>
             </div>
           )}
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <Link to="/blog" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2">
             <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Blog / مدونة</span>
           </Link>
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <Link to="/solat-time" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2">
             <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Solat Time / أوقات الصلاة</span>
           </Link>
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px -4'} py-2`}>
           <Link to="/calendar" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2">
             <BsMoonStarsFill className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Calendar / التقويم</span>
           </Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Sidebar;