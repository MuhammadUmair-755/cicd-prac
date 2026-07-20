import './ProjectCard.css';

/**
 * Card for a single portfolio project on the Projects page.
 */
function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <img src={project.image} alt={project.name} className="project-card__image" loading="lazy" />
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
