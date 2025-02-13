// import React from "react";
// import "./index.css";

// export default function Main() {
//   return (
//     <div className="main-container w-[1440px] h-[2991px] bg-[#f9faff] relative overflow-hidden mx-auto my-0">
//       <div className="w-[1320px] h-[629px] relative z-[49] mt-0 mr-0 mb-0 ml-[120px]">
//         <div className="w-[720px] h-[629px] bg-[url(../assets/images/92c70162-dc73-4814-839a-ef113f06a14a.png)] bg-cover bg-no-repeat absolute top-0 right-0 overflow-hidden z-[36]">
//           <div className="flex w-[292px] gap-[48px] items-start flex-nowrap relative z-50 mt-[14px] mr-0 mb-0 ml-[308px]">
//             <div className="flex w-[52px] flex-col gap-[2px] items-start shrink-0 flex-nowrap relative z-[51]">
//               <span className="h-[28px] shrink-0 basis-auto font-['Raleway'] text-[18px] font-medium leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[52]">
//                 About
//               </span>
//             </div>
//             <div className="flex w-[69px] flex-col gap-[2px] items-start shrink-0 flex-nowrap relative z-[53]">
//               <span className="h-[28px] shrink-0 basis-auto font-['Raleway'] text-[18px] font-medium leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[54]">
//                 Projects
//               </span>
//             </div>
//             <div className="flex w-[75px] flex-col gap-[2px] items-start shrink-0 flex-nowrap relative z-[55]">
//               <span className="h-[28px] shrink-0 basis-auto font-['Raleway'] text-[18px] font-medium leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[56]">
//                 Contacts
//               </span>
//             </div>
//           </div>
//         </div>
//         <span className="flex h-[32px] justify-start items-start font-['Comfortaa'] text-[18px] font-bold leading-[32px] text-[#25282b] absolute top-[12px] left-0 text-left whitespace-nowrap z-[49]">
//           Miaoyang Ye
//         </span>
//         <div className="flex w-[486px] h-[435px] flex-col gap-[12px] items-start flex-nowrap absolute top-[110px] left-0 overflow-hidden z-[37]">
//           <span className="flex w-[486px] h-[54px] justify-start items-start self-stretch shrink-0 font-['Nunito'] text-[20px] font-bold leading-[27.28px] text-[#57bfa2] relative text-left uppercase z-[38]">
//             software engineer
//             <br />
//             Sustainable technology
//           </span>
//           <div className="flex w-[486px] flex-col gap-[32px] items-start shrink-0 flex-nowrap relative z-[39]">
//             <span className="flex w-[486px] h-[154px] justify-start items-start shrink-0 font-['Playfair_Display'] text-[64px] font-bold leading-[76.8px] text-[#25282b] relative text-left z-40">
//               Hello, my name is Miaoyang Ye
//             </span>
//             <div className="flex w-[486px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[41]">
//               <span className="flex w-[486px] h-[108px] justify-start items-start shrink-0 font-['Nunito'] text-[24px] font-normal leading-[36px] text-[#828282] relative text-left z-[42]">
//                 Software Engineer with sustainability and design background,
//                 focus on technology application and innovation.
//               </span>
//             </div>
//             <div className="flex w-[244px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[43]">
//               <button className="flex w-[115px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] items-start shrink-0 flex-nowrap bg-[#7f9698] rounded-[8px] border-none relative z-[44] pointer">
//                 <span className="h-[27px] shrink-0 basis-auto font-['Roboto'] text-[18px] font-medium leading-[27px] text-[#fff] relative text-left whitespace-nowrap z-[45]">
//                   Projects
//                 </span>
//               </button>
//               <button className="flex w-[117px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] items-start shrink-0 flex-nowrap rounded-[8px] border-solid border-2 border-[#57bfa2] relative z-[46] pointer">
//                 <span className="h-[27px] shrink-0 basis-auto font-['Roboto'] text-[18px] font-medium leading-[27px] text-[#57bfa2] relative text-left whitespace-nowrap z-[47]">
//                   LinkedIn
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-[181px] flex-col gap-[4px] justify-center items-center flex-nowrap relative z-[33] mt-[144px] mr-0 mb-0 ml-[119px]">
//         <span className="flex w-[181px] h-[72px] justify-center items-start shrink-0 basis-auto font-['Playfair_Display'] text-[48px] font-bold leading-[72px] text-[#25282b] relative text-center whitespace-nowrap z-[34]">
//           Projects
//         </span>
//       </div>
//       <div className="w-[181px] h-[4px] bg-[#57bfa2] rounded-[2px] relative z-[35] mt-[4px] mr-0 mb-0 ml-[119px]" />
//       <div className="w-[1205px] h-[615px] relative z-[23] mt-[63px] mr-0 mb-0 ml-[120px]">
//         <div className="w-[575px] h-[500px] rounded-[24px] absolute top-0 left-0 overflow-hidden z-[23]">
//           <div className="w-[346px] h-[366px] absolute top-0 left-0 z-[24]" />
//           <div className="w-[600px] h-[350px] bg-[url(../assets/images/84ca125c-bb5f-45db-a5a7-387a51e3cf4a.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[31]" />
//           <div className="w-[576px] h-[150px] bg-[#fff] absolute top-[350px] left-0 z-[25]">
//             <div className="w-[530.735px] h-[133px] text-[0px] bg-[#fff] relative z-[26] mt-[17px] mr-0 mb-0 ml-[22.633px]">
//               <span className="flex w-[530px] h-[73px] justify-start items-start font-['Nunito'] text-[18px] font-normal leading-[27px] text-[#828282] relative text-left z-30 mt-[60px] mr-0 mb-0 ml-[0.37px]">
//                 I created this personal project in order to show how to create
//                 an interface in Figma using a portfolio as an example.
//               </span>
//               <button className="flex w-[90px] h-[43px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border-[1.5px] border-[#57bfa2] absolute top-[4px] left-[440.367px] z-[28] pointer">
//                 <span className="h-[27px] shrink-0 basis-auto font-['Roboto'] text-[18px] font-medium leading-[27px] text-[#57bfa2] relative text-left whitespace-nowrap z-[29]">
//                   More
//                 </span>
//               </button>
//               <span className="flex h-[25.56%] justify-start items-center font-['Playfair_Display'] text-[32px] font-bold leading-[34px] text-[#25282b] absolute top-[6.02%] left-[calc(50%-265px)] text-left whitespace-nowrap z-[27]">
//                 Project Name
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="w-[575px] h-[615px] rounded-[24px] absolute top-0 left-[630px] overflow-hidden z-[11]">
//           <div className="w-[600px] h-[467px] bg-[url(../assets/images/666ac948-c378-4165-89c2-d13848868a83.png)] bg-cover bg-no-repeat relative z-[13] mt-0 mr-0 mb-0 ml-0" />
//           <div className="w-[600px] h-[150px] bg-[#fff] relative z-[14] mt-0 mr-0 mb-0 ml-0">
//             <div className="w-[522px] h-[133px] text-[0px] bg-[#fff] relative z-[15] mt-[17px] mr-0 mb-0 ml-[24px]">
//               <span className="flex w-[522px] h-[73px] justify-start items-start font-['Nunito'] text-[18px] font-normal leading-[27px] text-[#828282] relative text-left z-[19] mt-[60px] mr-0 mb-0 ml-[5px]">
//                 I created this personal project in order to show how to create
//                 an interface in Figma using a portfolio as an example.
//               </span>
//               <button className="flex w-[90px] h-[43px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border-[1.5px] border-[#57bfa2] absolute top-[6px] left-[432px] z-[17] pointer">
//                 <span className="h-[27px] shrink-0 basis-auto font-['Roboto'] text-[18px] font-medium leading-[27px] text-[#57bfa2] relative text-left whitespace-nowrap z-[18]">
//                   More
//                 </span>
//               </button>
//               <span className="flex h-[25.56%] justify-start items-center font-['Playfair_Display'] text-[32px] font-bold leading-[34px] text-[#25282b] absolute top-[7.52%] left-[calc(50%-256px)] text-left whitespace-nowrap z-[16]">
//                 Project Name
//               </span>
//             </div>
//           </div>
//           <div className="w-[600px] h-[615px] absolute top-0 left-0 z-[12]" />
//         </div>
//       </div>
//       <div className="flex w-[192px] flex-col gap-[32px] justify-center items-center flex-nowrap relative mt-[1278px] mr-0 mb-0 ml-[624px]">
//         <div className="flex w-[192px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[1]">
//           <div className="w-[48px] h-[48px] shrink-0 bg-[url(../assets/images/7dfe9f34-846d-4e87-b10c-342eabe6727d.png)] bg-cover bg-no-repeat relative overflow-hidden z-[2]" />
//           <button className="w-[48px] h-[48px] shrink-0 border-none relative overflow-hidden z-[3] pointer">
//             <div className="w-[38px] h-[38px] bg-[url(../assets/images/173d3d8f-07da-47a5-a0ea-c6eaf6ad54de.png)] bg-[length:100%_100%] bg-no-repeat relative z-[4] mt-[5px] mr-0 mb-0 ml-[5px]" />
//           </button>
//           <div className="w-[48px] h-[48px] shrink-0 relative overflow-hidden z-[5]">
//             <div className="w-[42px] h-[32px] bg-[url(../assets/images/a2024954-8682-4a9f-9ed5-10ba92824dea.png)] bg-[length:100%_100%] bg-no-repeat relative z-[6] mt-[8px] mr-0 mb-0 ml-[3px]" />
//           </div>
//         </div>
//         <span className="h-[22px] shrink-0 basis-auto font-['Nunito'] text-[16px] font-normal leading-[21.824px] text-[#828282] relative text-left whitespace-nowrap z-[7]">
//           Miaoyang Ye 2025
//         </span>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Masonry from "react-masonry-css";
import "./index.css";
import { Link } from 'react-router-dom';
import Header from '../components/Header';

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
          src="src/assets/images/profile.png"
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
    image: "src/assets/images/cover/responsive-facade.png",
    title: "Responsive Facade",
    subtitle: "High-rise Design",
    description: "In order to improve the environment in this community and provide more greenery to the public, I designed a responsive façade for a high-rise building."
  },
  {
    image: "src/assets/images/cover/building-optimization.jpg",
    title: "Building Optimization",
    subtitle: "Building Performance Simulation of an Office Building in MiamiBuilding Miami",
    description: "To enhance the office building's environment and performance, we conducted several iterations to optimize it from the perspectives of solar radiation, daylight, and thermal efficiency."
  },
  {
    image: "src/assets/images/waves/012.png",
    title: "Waves",
    subtitle: "High-rise Design",
    description: "Inspired by the Almost-Fofurlier transform, the installation is combined math with some characters of waves, trying to bring a similar feeling with the sea to people."
  },
  {
    image: "src/assets/images/cover/nature.jpg",
    title: "Waving with Nature",
    subtitle: "Resilience Design",
    description: "Redesign Pasir Panjang Power Station and the surroundings to enhance vitality and connection in the Greater Southern Waterfront."
  },
  {
    image: "src/assets/images/cover/generative-building.jpg",
    title: "Generative Building",
    subtitle: "Computational Design of Science and Education Building Based on Standardized DesignBased Design",
    description: "Starting from standardized design and existing theories of spatial typology, the project explores the possibility of generative design to enhance the information exchange and interaction."
  },
  {
    image: "src/assets/images/cover/data-imputation.png",
    title: "Self-Supervised Building Energy Data Imputation",
    subtitle: "Generative AI course project",
    description: "Building energy data imputation is crucial for enhancing the accuracy of energy analysis and decision-making. We propose a self-supervised learning framework to impute missing data."
  },
  {
    image: "src/assets/images/cover/slimes.png",
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
