import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Blog Post 1</h2>
          <p>Introduction to Blog Post 1</p>
          <a href="www.islamcity.org" className="text-blue-500 hover:text-blue-700">
            Read More
          </a>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Blog Post 2</h2>
          <p>Introduction to Blog Post 2</p>
          <a href="www.aljazeera.com" className="text-blue-500 hover:text-blue-700">
            Read More
          </a>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Blog Post 3</h2>
          <p>Introduction to Blog Post 3</p>
          <a href="www.muslimnews.com.ng" className="text-blue-500 hover:text-blue-700">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;