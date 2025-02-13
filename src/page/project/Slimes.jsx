import React from 'react';
import Header from '../../components/Header';
import SwiperGallery from './SwiperGallery';

export default function ResponsiveFacade() {
  return (
    <div className="max-w-screen-lg mx-auto px-8 py-12">
      <Header title="Projects" />

      {/* Project title and description */}
      <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-[#25282b] font-playfair mb-1">
        Slimes
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Fundamentals of Programming and Computer Science course project
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Individual work</p>
        <p>2023 Fall, Fundamentals of Programming and Computer Science</p>
        <p>Medium: Python</p>
      </div>

      <p className="text-lg text-gray-600 mt-4 mb-4">
      Welcome to SLIMES, an exciting puzzle game where your goal is to remove all the slimes within a limited time to win! Strategize your moves to mix and remove slimes efficiently and achieve the highest score.
      </p>

      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/HBd0ACqr8qg"
          title="Slimes Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
