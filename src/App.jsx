/*import React, { useState } from 'react';
import BlogPost from './components/BlogPost';
import PopularPost from './components/PopularPost';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';

const App = () => {
  const [page, setPage] = useState('home');

  const blogPost = {
    image: "https://placehold.co/600x400",
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  const popularPosts = [
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 2",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 3",
      content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
    }
  ];

  const tags = ["React", "JavaScript", "CSS", "HTML", "Web Development"];

  const renderPage = () => {
    if (page === 'login') return <LoginPage goBack={() => setPage('home')} />;
    if (page === 'signup') return <SignUpPage goBack={() => setPage('home')} />;
    if (page === 'homePage') return <HomePage goBack={() => setPage('home')} />;

    return (
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <BlogPost {...blogPost} />
        </section>
        <aside>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular Content</h2>
            {popularPosts.map((post, index) => (
              <PopularPost key={index} {...post} />
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </section>
        </aside>
      </main>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <div onClick={() => setPage('home')} className="text-2xl font-bold cursor-pointer">BlogName</div>
        <nav className="flex items-center space-x-4">
          <button onClick={() => setPage('homePage')} className="text-lg text-blue-500 hover:underline">Home</button>
          <button onClick={() => setPage('login')} className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</button>
          <button onClick={() => setPage('signup')} className="text-lg text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Sign Up</button>
        </nav>
      </header>
      {renderPage()}
    </div>
  );
};

export default App;*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import PopularPost from './components/PopularPost';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';

const App = () => {
  const blogPost = {
    image: "https://placehold.co/600x400",
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  const popularPosts = [
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 2",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      image: "https://placehold.co/300x300",
      title: "Popular Post 3",
      content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
    }
  ];

  const tags = ["React", "JavaScript", "CSS", "HTML", "Web Development"];

  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <Link to="/" className="text-2xl font-bold">BlogName</Link>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-lg text-blue-500 hover:underline">Home</Link>
            <Link to="/login" className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</Link>
            <Link to="/signup" className="text-lg text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Sign Up</Link>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <section className="md:col-span-2">
                  <BlogPost {...blogPost} />
                </section>
                <aside>
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Popular Content</h2>
                    {popularPosts.map((post, index) => (
                      <PopularPost key={index} {...post} />
                    ))}
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  </section>
                </aside>
              </main>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


