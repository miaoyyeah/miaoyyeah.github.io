import React from "react";
import Masonry from "react-masonry-css";
import "./index.css";
import { Link } from 'react-router-dom';
import Header from '../components/Header';

// import all images
import profileImg from '../assets/images/profile.png';
import responsiveFacadeImg from '../assets/images/cover/responsive-facade.png';
import buildingOptimizationImg from '../assets/images/cover/building-optimization.jpg';
import wavesImg from '../assets/images/waves/012.png';
import natureImg from '../assets/images/cover/nature.jpg';
import generativeBuildingImg from '../assets/images/cover/generative-building.jpg';
import dataImputationImg from '../assets/images/cover/data-imputation.png';
import slimesImg from '../assets/images/cover/slimes.png';

export default function Main() {
  return (
    <div className="bg-[#f9faff] mx-auto px-8 py-12 max-w-screen-lg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="max-w-lg">
          <h2 className="text-[#57bfa2] text-xl uppercase font-bold font-nunito">
            Software Engineer <br /> Sustainable Technology Innovator
          </h2>
          <h1 className="text-5xl font-bold mt-4 leading-tight font-playfair">
            Hello, my name is Miaoyang Ye
          </h1>
          <p className="text-xl text-[#828282] mt-6 leading-8">
            Software Engineer with sustainability and design background, focus on technology application and innovation.
          </p>
          <div className="mt-6 flex gap-4">
            <Button text="Projects" variant="primary" />
            <Button text="LinkedIn" variant="secondary" />
          </div>
        </div>
        <img
          src={profileImg}
          alt="Profile"
          className="w-[400px] md:w-[500px] mt-8 md:mt-0"
        />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-4xl font-bold text-[#25282b] font-playfair">
          Projects
        </h2>
        <div className="w-24 h-1 bg-[#57bfa2] my-4"></div>

        <Masonry
          breakpointCols={{ default: 2, 768: 2, 480: 1 }}
          className="flex gap-8"
          columnClassName="masonry-grid_column"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          ))}
        </Masonry>
      </section>

      {/* Footer */}
      <footer className="text-center mt-32 text-[#828282] text-lg">
        Miaoyang Ye 2025
      </footer>
    </div>
  );
}

// Project data
const projects = [
  {
    image: responsiveFacadeImg,
    title: "Responsive Facade",
    subtitle: "High-rise Design",
    description: "In order to improve the environment in this community and provide more greenery to the public, I designed a responsive façade for a high-rise building."
  },
  {
    image: buildingOptimizationImg,
    title: "Building Optimization",
    subtitle: "Building Performance Simulation of an Office Building in Miami",
    description: "To enhance the office building's environment and performance, we conducted several iterations to optimize it from the perspectives of solar radiation, daylight, and thermal efficiency."
  },
  {
    image: wavesImg,
    title: "Waves",
    subtitle: "High-rise Design",
    description: "Inspired by the Almost-Fourier transform, the installation is combined with math and some characteristics of waves, trying to bring a similar feeling with the sea to people."
  },
  {
    image: natureImg,
    title: "Waving with Nature",
    subtitle: "Resilience Design",
    description: "Redesign Pasir Panjang Power Station and the surroundings to enhance vitality and connection in the Greater Southern Waterfront."
  },
  {
    image: generativeBuildingImg,
    title: "Generative Building",
    subtitle: "Computational Design of Science and Education Building",
    description: "Starting from standardized design and existing theories of spatial typology, the project explores the possibility of generative design to enhance the information exchange and interaction."
  },
  {
    image: dataImputationImg,
    title: "Self-Supervised Building Energy Data Imputation",
    subtitle: "Generative AI course project",
    description: "Building energy data imputation is crucial for enhancing the accuracy of energy analysis and decision-making. We propose a self-supervised learning framework to impute missing data."
  },
  {
    image: slimesImg,
    title: "SLIMES",
    subtitle: "Fundamentals of Programming and Computer Science course project",
    description: "SLIMES is a fun and challenging puzzle game where players must clear the board by mixing or removing slimes of different colors within a limited time, testing both strategy and quick thinking."
  },
];

// Button Component
const Button = ({ text, variant }) => {
  const baseStyles =
    "px-6 py-2 rounded-md text-lg font-medium leading-7 focus:outline-none transition-all";
  const variantStyles =
    variant === "primary"
      ? "bg-[#7f9698] text-white hover:bg-[#5a7b7d]"
      : "border border-[#57bfa2] text-[#57bfa2] hover:bg-[#57bfa2] hover:text-white";

  return <button className={`${baseStyles} ${variantStyles}`}>{text}</button>;
};

// Project Card Component
const ProjectCard = ({ image, title, subtitle, description }) => {
  // Convert title to a URL-friendly format (lowercase, replace spaces with hyphens)
  const formattedTitle = title
    .toLowerCase()
    .replace(/\s+/g, '-')   // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove special characters

  return (
    <div className="rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl relative">
      <div className="rounded-t-lg overflow-hidden">
        <img 
          src={image} 
          className="w-full h-auto min-h-[300px] max-h-[500px] object-cover" 
          alt={title} 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <Link 
              to={`/project/${formattedTitle}`} 
              className="text-2xl font-bold text-[#25282b] font-playfair hover:text-[#57bfa2] transition-all"
            >
              {title}
            </Link>
            <span className="text-base text-gray-500 mt-0 block">{subtitle}</span>
          </div>
          <Link to={`/project/${formattedTitle}`}>
            <button className="border border-[#57bfa2] text-[#57bfa2] text-lg rounded-md px-4 py-1 hover:bg-[#57bfa2] hover:text-white transition-all">
              More
            </button>
          </Link>
        </div>
        <p className="text-gray-600 text-lg mt-2">{description}</p>
      </div>
    </div>
  );
};
