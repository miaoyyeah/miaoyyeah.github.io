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
        Waves
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Installation DesignInstallation Design
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Individual work</p>
        <p>2022 Autumn, Open project</p>
        <p>Instructor: Michelle Jiang</p>
        <p>Medium: Rhino, PS, AI, Enscape</p>
      </div>

      <p className="text-lg text-gray-600 mt-4 mb-4">
      Inspired by the Almost-Fofurlier transform, the installation is combined math with some characters of waves, trying to bring a similar feeling with the sea to people.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="waves" />

    </div>
  );
}
