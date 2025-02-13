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
        Waving with Nature
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Resilience Design
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Environmental Design Excellence award
        in Designing Resilience Global 2022</p>
        <p>2022 Spring, Design Studio VI</p>
        <p>Instructor: Yiqiang Xiao, Jing Wang</p>
        <p>Medium: Rhino, SU, PS, AI, ArcGIS Pro, Enscape</p>
        <p>Role in Team: Research(30%), Design(20%), Evaluation(30%)</p>
        <p>Individual Further Design and Improvement</p>
        <p>All illustrations are by the author</p>
      </div>

      <p className="text-lg text-gray-600 mt-4 mb-4">
      Based on the history, SLR, Flood, Fresh water Shortage, Spatial Segregation, Ecosystem Discontinuity challenges in Singapore, we purpose to redesign Pasir Panjang Power Station and the surroundings to enhance vitality and connection in the Greater Southern Waterfront.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="nature" />

    </div>
  );
}
