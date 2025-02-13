import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './page/index';
import ProjectDetail from './page/project/ProjectDetail';
import ResponsiveFacade from './page/project/Responsive-facade';
import Waves from './page/project/Waves';
import WavingWithNature from './page/project/Waving-with-nature';
import Generative from './page/project/Generative-building';
import BuildingOptimization from './page/project/Building-optimization';
import DataImputation from './page/project/Self-supervised-building-energy-data-imputation';
import Slimes from './page/project/Slimes';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/project/responsive-facade" element={<ResponsiveFacade />} />
        <Route path="/project/waves" element={<Waves />} />
        <Route path="/project/waving-with-nature" element={<WavingWithNature />} />
        <Route path="/project/generative-building" element={<Generative />} />
        <Route path="/project/building-optimization" element={<BuildingOptimization />} />
        <Route path="/project/self-supervised-building-energy-data-imputation" element={<DataImputation />} />
        <Route path="/project/slimes" element={<Slimes />} />
        <Route path="/project/:name" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
