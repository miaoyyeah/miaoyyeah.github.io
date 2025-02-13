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
        Generative Building
      </h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 border border-[#57bfa2] text-[#57bfa2] rounded-md hover:bg-[#57bfa2] hover:text-white transition-all"
      >
        ← Back
      </button>
      </div>
      <h2 className="text-xl text-gray-500 mt-2">
      Computational Design of Science and Education Building Based on Standardized Design
      </h2>
      
      {/* New introduction section */}
      <div className="mt-2 text-left text-lg text-gray-500">
        <p>Individual work</p>
        <p>2023 Spring, Graduation Project</p>
        <p>Instructor: Yubo Liu</p>
        <p>Medium: Grasshopper with Python, Rhino, PS, AI</p>
      </div>

      <p className="text-lg text-gray-600 mt-4">
      Starting from standardized design and existing theories of spatial typology, I extracted elements that promotee the exchange and cooperation among disciplines and formulated several generative rules.
      </p>
      <p className="text-lg text-gray-600 mt-4">
      After using computational tools to generate multiple design solutions in accordance with these rules, I used spatial syntax integration and room accessibility as evaluation criteria to select and refine the design solutions.
      </p>
      <p className="text-lg text-gray-600 mt-4 mb-4">
      Following the methodology, I undertook a design practice in the center of an innovative area in the northwestern part of Tecnológico de Monterrey, located in the state of Nuevo Leon, Mexico.
      </p>

      {/* Pass folder name to dynamically load images */}
      <SwiperGallery folder="generative" />

    </div>
  );
}
