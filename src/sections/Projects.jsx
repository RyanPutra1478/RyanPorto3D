import ProjectGallery from '../components/ProjectGallery';
import './Projects.css';

const Projects = ({
  id,
  label = 'Portfolio',
  title = 'Featured Projects',
  subtitle,
  items = [],
  cta,
  offsetFromHero = false,
}) => {
  return (
    <section id={id} className={`projects section ${offsetFromHero ? 'projects--offset' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}

          {cta && (
            <div className="projects__actions">
              <a href={cta.href} className="btn btn--ghost projects__cta">
                {cta.label}
              </a>
            </div>
          )}
        </div>

        <div className="projects__grid">
          {items.map((project) => (
            <ProjectGallery key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
