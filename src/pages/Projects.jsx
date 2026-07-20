import PageHeader from '../components/PageHeader.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

/**
 * Projects page: grid of portfolio project cards.
 */
function Projects() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="A selection of products we have designed, built and shipped for our clients."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work We Are Proud Of"
            subtitle="From hospitals to marketplaces — real products solving real problems."
          />
          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
