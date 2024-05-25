import React, { useState, useEffect } from 'react';
import image1 from '.././assets/medical1.JPG';
import image2 from '.././assets/distribution1.JPG';
import image3 from '.././assets/distribution2.JPG';
import { SiSololearn } from "react-icons/si";
import { FaMosque, FaBoreHole } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
import { PiBowlFoodFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="mb-8">
        <img src={images[currentImageIndex]} alt="Carousel" className="w-full h-64 object-cover" />
      </div>
      <h2 className="text-2xl text-center font-bold mb-4">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <Link to="/mosques-built" className="bg-gray-200 p-6 rounded-md flex flex-col items-center">
          <FaMosque className="text-4xl mb-2" />
          <span>37 Mosques Built</span>
        </Link>
        <Link to="/bore-hole" className="bg-gray-200 p-6 rounded-md flex flex-col items-center">
          <FaBoreHole className="text-4xl mb-2" />
          <span>230+ BoreHole</span>
        </Link>
        <Link to="/iftar" className="bg-gray-200 p-6 rounded-md flex flex-col items-center">
          <PiBowlFoodFill className="text-4xl mb-2" />
          <span>Iftar</span>
        </Link>
        <Link to="/empowerment-program" className="bg-gray-200 p-6 rounded-md flex flex-col items-center">
          <SiSololearn className="text-4xl mb-2" />
          <span>Empowerment Program</span>
        </Link>
        <Link to="/donate" className="bg-gray-200 p-6 rounded-md flex flex-col items-center">
          <FcDonate className="text-4xl mb-2" />
          <span>Donate Now!!!</span>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">Welcome to Maktab Dahwah</h1>
      <p className="text-lg mb-6">
        We are a leading Islamic organization dedicated to spreading the message of Islam and providing valuable resources for spiritual growth and education.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-2">Lectures</h2>
          <p className="mb-4">Explore our collection of insightful lectures by renowned scholars.</p>
          <a href="/lectures" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
        <div className="bg-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-2">Events</h2>
          <p className="mb-4">Stay updated with our upcoming events and gatherings.</p>
          <a href="/events" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
        <div className="bg-gray-200 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-2">Blog</h2>
          <p className="mb-4">Read our blog for valuable insights and articles on Islamic topics.</p>
          <a href="/blog" className="text-blue-500 hover:text-blue-700">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;