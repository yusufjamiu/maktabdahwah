import React, { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import logoImage from '../assets/Maktab.JPG';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 z-20 flex">
      <div
        className={`bg-slate-600 h-screen p-5 pt-8 ${
          open ? 'w-72 sm:w-35' : 'w-20 sm:w-15'
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-dark-yellow cursor-pointer ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center">
          <img
            src={logoImage}
            alt="Logo"
            className={`h-16 mr-2 duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <span
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            MaktabDahwah
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;