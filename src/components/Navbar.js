import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between bg-lime-300 px-8 py-3 items-center">
      <div className="text-xl font-bold">Maktab Dahwah</div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;