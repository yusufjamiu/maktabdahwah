import React, { useState } from 'react';
import { BsList, BsSearch, BsBook, BsCalendar, BsCalendarEvent, BsMoonStarsFill, BsMortarboardFill, BsMusicNoteList, BsHouse, BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Maktab.JPG';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setSubmenu(submenu === menu ? null : menu);
  };

  const handleParentClick = (menu) => {
    toggleSubmenu(menu);
  };

  const handleSubmenuClick = () => {
    setOpen(false);
    setSubmenu(null);
  };

  const handleLinkClick = () => {
    setOpen(false);
    setSubmenu(null);
  };

  return (
    <div className="flex">
      <div className={`bg-slate-600 h-screen p-5 pt-8 ${open ? 'w-72 sm:w-35' : 'w-20 sm:w-15'} duration-300 relative`}>
        <BsList
          className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-dark-yellow cursor-pointer ${open && 'rotate-180'}`}
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
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'home' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsHouse className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Home / الصفحة الرئيسية</span>
            </Link>
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'lectures' && 'bg-gray-700'}`}
              onClick={() => handleParentClick('lectures')}
            >
              <BsMusicNoteList className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Lectures / محاضرات</span>
            </div>
            {submenu === 'lectures' && (
              <div className={`pl-6 ${!open && 'hidden'}`}>
                <Link to="/lectures/yoruba" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Yoruba / يوربا
                </Link>
                <Link to="/lectures/english" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  English / انجليزية
                </Link>
                <Link to="/lectures/arabic" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Arabic / عربية
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center justify-between w-full text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'ramadan' && 'bg-gray-700'}`}
              onClick={() => handleParentClick('ramadan')}
            >
              <div className="flex items-center">
                <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
                <span className={`${!open && 'hidden'}`}>Ramadan / رمضان</span>
              </div>
              <BsChevronDown className={`text-lg ${!open && 'hidden'}`} />
            </div>
            {submenu === 'ramadan' && (
              <div className={`mt-2 ${!open && 'hidden'}`}>
                <Link to="/ramadan/schedule" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Schedule / جدول
                </Link>
                <Link to="/ramadan/activities" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Activities / أنشطة
                </Link>
                <Link to="/ramadan/resources" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Resources / مصادر
                </Link>
              </div>
            )}
          </div>
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <div
              className={`flex items-center justify-between w-full text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'quran' && 'bg-gray-700'}`}
              onClick={() => handleParentClick('quran')}
            >
              <div className="flex items-center">
                <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
                <span className={`${!open && 'hidden'}`}>Quran / القرآن</span>
              </div>
              <BsChevronDown className={`text-lg ${!open && 'hidden'}`} />
            </div>
            {submenu === 'quran' && (
              <div className={`mt-2 ${!open && 'hidden'}`}>
                <Link to="/quran/recitation" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                  Recitation / تلاوة
                </Link>
            <Link to="/quran/translation" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Translation / ترجمة
               </Link>
               <Link to="/quran/tafsir" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Tafsir / تفسير
               </Link>
             </div>
           )}
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <div
             className={`flex items-center justify-between w-full text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'events' && 'bg-gray-700'}`}
             onClick={() => handleParentClick('events')}
           >
             <div className="flex items-center">
               <BsCalendarEvent className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
               <span className={`${!open && 'hidden'}`}>Events / فعاليات</span>
             </div>
             <BsChevronDown className={`text-lg ${!open && 'hidden'}`} />
           </div>
           {submenu === 'events' && (
             <div className={`mt-2 ${!open && 'hidden'}`}>
               <Link to="/events/upcoming" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Upcoming / قادمة
               </Link>
               <Link to="/events/past" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Past / ماضية
               </Link>
               <Link to="/events/register" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Register / تسجيل
               </Link>
             </div>
           )}
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <div
             className={`flex items-center justify-between w-full text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'scholarships' && 'bg-gray-700'}`}
             onClick={() => handleParentClick('scholarships')}
           >
             <div className="flex items-center">
               <BsMortarboardFill className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
               <span className={`${!open && 'hidden'}`}>Scholarships / منح دراسية</span>
             </div>
             <BsChevronDown className={`text-lg ${!open && 'hidden'}`} />
           </div>
           {submenu === 'scholarships' && (
             <div className={`mt-2 ${!open && 'hidden'}`}>
               <Link to="/scholarships/apply" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Apply / تقديم
               </Link>
               <Link to="/scholarships/requirements" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Requirements / متطلبات
               </Link>
               <Link to="/scholarships/recipients" className="block text-white hover:bg-gray-700 rounded-md p-2" onClick={handleSubmenuClick}>
                 Recipients / المتلقين
               </Link>
             </div>
           )}
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <Link to="/blog" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2" onClick={handleLinkClick}>
             <BsBook className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Blog / مدونة</span>
           </Link>
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <Link to="/solat-time" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2" onClick={handleLinkClick}>
             <BsCalendar className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
             <span className={`${!open && 'hidden'}`}>Solat Time / أوقات الصلاة</span>
           </Link>
         </div>
         <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
           <Link to="/calendar" className="flex items-center text-white hover:bg-gray-700 rounded-md p-2" onClick={handleLinkClick}>
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