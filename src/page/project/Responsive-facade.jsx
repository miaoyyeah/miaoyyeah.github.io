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
        Responsive Facade
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
        High-rise Design
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Individual work</p>
        <p>2021 Spring, Design Studio IV</p>
        <p>Instructor: Jiayi Lin</p>
        <p>Medium: Rhino, Climatestudio, PS, AI, Enscape</p>
      </div>

      <p className="text-lg text-gray-600 mt-4">
      The project is located in Guangzhou, China, a subtropical monsoon climate zone with long summers and high requirements for building shading. High-rise buildings surround the site, and the neighborhood lacks public green. In order to improve the environment in this community and provide more greenery to the public, I designed a responsive façade for a high-rise building.</p>
      <p className="text-lg text-gray-600 mt-4 mb-4">
      This façade combines a shading system and vertical greenery, consisting of three different monolithic modules. Some of them are operable. And they can be controlled by people or adjusted according to set rules and patterns. For example, module 1 and module 2 can automatically rotate according to the intensity of indoor and outdoor light to make the natural lighting in the office area suitable for people to work.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="responsive" />

    </div>
  );
}
