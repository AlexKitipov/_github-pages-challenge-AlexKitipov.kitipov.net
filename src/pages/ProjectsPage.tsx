import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectDetailPath } from '../utils/routes';

function ProjectsPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Projects</p>
      <h1 id="page-title">Portfolio Projects</h1>
      <p className="intro">
        Featured applications, experiments, and algorithm practice are now backed by
        reusable typed project data.
      </p>
      <div className="card-grid" aria-label="Project links">
        {projects.map((project) => (
          <article className="info-panel" key={project.id}>
            <p className="status-label">{project.status}</p>
            <h2>{project.title}</h2>
            {project.subtitle ? <p>{project.subtitle}</p> : null}
            <p>{project.summary}</p>
            <div className="tag-list" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link className="text-action" to={getProjectDetailPath(project.id)}>
              View project
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
