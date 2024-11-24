import React, { useState } from 'react';

const BlogPost = ({ image, title, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <article className="border rounded-lg mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-96 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">
          {showFullContent ? content : `${content.substring(0, 100)}...`}
        </p>
        <button onClick={() => setShowFullContent(!showFullContent)} className="text-blue-500 hover:underline">
          {showFullContent ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </article>
  );
};

export default BlogPost;
