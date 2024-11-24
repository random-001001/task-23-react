import React from 'react';
import BlogPost from './BlogPost'; // Importing the BlogPost component

const HomePage = ({ goBack }) => {
  const posts = [
    {
      image: "https://placehold.co/600x400",
      title: "Exploring the Mountains",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "A Day at the Beach",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "City Life Adventures",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "The Beauty of Nature",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={goBack}
          className="text-blue-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default HomePage;
