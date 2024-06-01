import React, { useState } from 'react';

const Alaro = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categories = [
    {
      name: 'Ramadan Lectures',
      lists: [
        { name: 'List 1', link: 'https://www.facebook.com' },
        { name: 'List 2', link: 'https://www.facebook.com' },
        { name: 'List 3', link: 'https://www.facebook.com' },
      ],
    },
    {
      name: 'Marriage',
      lists: [
        { name: 'List 1', link: 'https://www.facebook.com' },
        { name: 'List 2', link: 'https://www.facebook.com' },
        { name: 'List 3', link: 'https://www.facebook.com' },
      ],
    },
    {
      name: 'Finance',
      lists: [
        { name: 'List 1', link: 'https://www.facebook.com' },
        { name: 'List 2', link: 'https://www.facebook.com' },
        { name: 'List 3', link: 'https://www.facebook.com' },
      ],
    },
    {
      name: 'Faith',
      lists: [
        { name: 'List 1', link: 'https://www.facebook.com' },
        { name: 'List 2', link: 'https://www.facebook.com' },
        { name: 'List 3', link: 'https://www.facebook.com' },
      ],
    },
    {
      name: 'Islam',
      lists: [
        { name: 'List 1', link: 'https://www.facebook.com' },
        { name: 'List 2', link: 'https://www.facebook.com' },
        { name: 'List 3', link: 'https://www.facebook.com' },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Prof. Abdulmajeed Alaro</h1>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.name} className="border rounded-md">
            <div
              className="px-4 py-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleCategory(category.name)}
            >
              <span>{category.name}</span>
              <span>
                {expandedCategory === category.name ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
            {expandedCategory === category.name && (
              <ul className="px-4 pb-2">
                {category.lists.map((list) => (
                  <li key={list.name} className="py-1">
                    <a
                      href={list.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {list.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alaro;