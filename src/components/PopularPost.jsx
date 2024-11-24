import React from 'react';

const PopularPost = ({ image, title, content }) => (
  <div className="flex mb-4">
    <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg mr-4" />
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{content.substring(0, 50)}...</p>
      <a href="#" className="text-blue-500 text-sm hover:underline">Read More</a>
    </div>
  </div>
);

export default PopularPost;
