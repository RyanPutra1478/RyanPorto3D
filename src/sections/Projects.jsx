import ProjectGallery from '../components/ProjectGallery';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of my work in game development, 3D modeling, and animation — 
            showcasing both the creative renders and technical topology.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <ProjectGallery key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
