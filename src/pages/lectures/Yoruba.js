// Yoruba.js
import React, { useState } from 'react';
import abdulRahmanImg from '../../assets/Maktab.JPG';
import ahmadImg from '../../assets/Maktab.JPG';
import ibrahimImg from '../../assets/Maktab.JPG';
import ismailImg from '../../assets/Maktab.JPG';
import khalidImg from '../../assets/Maktab.JPG';
import muhammadImg from '../../assets/Maktab.JPG';
import omarImg from '../../assets/Maktab.JPG';
import yusufImg from '../../assets/Maktab.JPG';
import zaidImg from '../../assets/Maktab.JPG';
import zakiImg from '../../assets/Maktab.JPG';
import { Link } from 'react-router-dom';

const GridItem = ({ image, name, link }) => (
  <Link to={link} className="flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mb-2" />
    <span>{name}</span>
  </Link>
);

const Yoruba = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Yoruba / يوربا</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search lectures..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <GridItem
          image={abdulRahmanImg}
          name="Prof Abdulmajeed Alaro"
          link="/lectures/alaro"
        />
        <GridItem image={ahmadImg} name="Sheikh Najmudeen Sulaiman" link="/lectures/sheikhnaj" />
        <GridItem image={ibrahimImg} name="Dr. Sharaf Gbadebo" link="/lectures/drgbadebo" />
        <GridItem image={ismailImg} name="Sheikh Ali Jabata" link="/lectures/jabata" />
        <GridItem image={khalidImg} name="Sheikh Habeebullah Yusuf Adewuyi" link="/lectures/drhabeebadewuyi" />
        <GridItem
          image={muhammadImg}
          name="Sheikh Habeebullah Jumah Agbabiaka"
          link="/lectures/drhabeeb"
        />
        <GridItem image={omarImg} name="Sheikh Ridwan Jamiiu" link="/lectures/sheikhridwan" />
        <GridItem image={yusufImg} name="Dr. Sanusi Lafiaji" link="/lectures/drsanusi" />
        <GridItem image={zaidImg} name="Sheikh Amubieya" link="/lectures/amubieya" />
        <GridItem image={zakiImg} name="Sheikh Luqman sekoni" link="/lectures/sekoni" />
      </div>
    </div>
  );
};

export default Yoruba;