import { useParams } from 'react-router-dom';
import projectDetails from '../data/projectData.json';

export default function ProjectDetail() {
  const { name } = useParams();
  const project = projectDetails[name.toLowerCase()];

  if (!project) {
    return <div className="text-center text-xl text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-[#25282b] font-playfair">{project.title}</h1>
      <h2 className="text-xl text-gray-500 mt-2">{project.subtitle}</h2>
      <p className="text-lg text-gray-600 mt-4">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {project.images.map((image, index) => (
          <img key={index} src={image} className="w-full rounded-lg shadow-md" alt={`Project ${index}`} />
        ))}
      </div>
    </div>
  );
}
