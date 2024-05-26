import React, { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsBook, BsCalendar, BsCalendarEvent, BsMoonStarsFill, BsMortarboardFill, BsMusicNoteList, BsHouse } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Maktab.JPG';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
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
            MaktabDahwah
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
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('home')}
            >
              <BsHouse className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Home</span>
            </Link>
          </div>
          <div className={`flex flex-col rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/lectures"
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('lectures')}
            >
              <BsMusicNoteList className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Lectures</span>
            </Link>
            {activeMenu === 'lectures' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/lectures/lecture1" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Lecture 1
                </Link>
                <Link to="/lectures/lecture2" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Lecture 2
                </Link>
                <Link to="/lectures/lecture3" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Lecture 3
                </Link>
              </div>
            )}
          </div>
          <div className={`flex flex-col rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/ramadan"
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('ramadan')}
            >
              <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Ramadan</span>
            </Link>
            {activeMenu === 'ramadan' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/ramadan/schedule" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Schedule
                </Link>
                <Link to="/ramadan/activities" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Activities
                </Link>
                <Link to="/ramadan/resources" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Resources
                </Link>
              </div>
            )}
          </div>
          <div className={`flex flex-col rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/quran"
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('quran')}
            >
              <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Quran</span>
            </Link>
            {activeMenu === 'quran' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/quran/recitation" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Recitation
                </Link>
                <Link to="/quran/translation" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Translation
                </Link>
                <Link to="/quran/tafsir" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Tafsir
                </Link>
              </div>
            )}
          </div>
          <div className={`flex flex-col rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/events"
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('events')}
            >
              <BsCalendarEvent className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Events</span>
            </Link>
            {activeMenu === 'events' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/events/upcoming" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Upcoming
                </Link>
                <Link to="/events/past" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Past
                </Link>
                <Link to="/events/register" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className={`flex flex-col rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/scholarships"
              className={`flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full`}
              onClick={() => toggleSubmenu('scholarships')}
            >
              <BsMortarboardFill className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Scholarships</span>
            </Link>
            {activeMenu === 'scholarships' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/scholarships/apply" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Apply
                </Link>
                <Link to="/scholarships/requirements" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Requirements
                </Link>
                <Link to="/scholarships/recipients" className="block text-white hover:bg-gray-700 rounded-md p-2">
                  Recipients
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link to="/blog" className="flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full">
              <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Blog</span>
            </Link>
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link to="/solat-time" className="flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full">
              <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Solat Time</span>
            </Link>
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link to="/calendar" className="flex items-center text-white rounded-md p-2 hover:bg-gray-700 w-full">
              <BsMoonStarsFill className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Calendar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
