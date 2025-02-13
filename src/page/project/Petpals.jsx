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
        Petpals
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Online AI-Powered Pet social Platform
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Group work</p>
        <p>2024 Fall, Web Application</p>
        <p>Instructor: Jeffrey Eppinger</p>
        <p>Teammates: Ziying Qi, Apple Sun</p>
        <p>Medium: React, Django, AWS, OpenAI API, Google map API, Google OAuth</p>
      </div>

      <p className="text-lg text-gray-600 mt-4 mb-4">
      PetPals is an online pet social platform that uses AI to match pets based on their profiles and behaviors, helping pet owners find compatible friends and walking partners for their pets.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="petpals" />

    </div>
  );
}
