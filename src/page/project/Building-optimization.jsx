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
        Building Optimization
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Building Performance Simulation and Optimization of an Office Building in Miami
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Group work</p>
        <p>2023 Fall, Environmental Performance Simulation</p>
        <p>Instructor: Tian Li</p>
        <p>Teammate: Yin Chen, Zeeshan Sheriff</p>
        <p>Medium: Grasshopper with Climatestudio, Ladybug, Rhino, AI, ID</p>
      </div>

      <p className="text-lg text-gray-600 mt-4">
      The site is located in Miami, FL, which is known for its hot and humid climate. Due to the heat, the building’s performance may be unsatisfactory under certain conditions.
      </p>
      <p className="text-lg text-gray-600 mt-4 mb-4">
      To enhance the office building's environment and performance, we conducted several iterations to optimize it from the perspectives of solar radiation, daylight, and thermal efficiency. During these iterations, numerous indicators such as solar energy intensity, annual glare, and Energy Use Intensity (EUI) were improved to varying extents, contributing to a superior building performance.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="optimization" />

    </div>
  );
}
