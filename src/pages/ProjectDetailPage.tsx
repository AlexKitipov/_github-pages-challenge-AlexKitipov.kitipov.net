import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { routes } from '../utils/routes';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="page-card" aria-labelledby="page-title">
        <p className="eyebrow">Project detail</p>
        <h1 id="page-title">Project not found</h1>
        <p className="intro">
          The requested project does not exist in the typed project data.
        </p>
        <Link className="text-action" to={routes.projects}>
          Back to all projects
        </Link>
      </section>
    );
  }

  const publicLinks = project.links.filter((link) => link.isPublic);

  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Project detail</p>
      <h1 id="page-title">{project.title}</h1>
      <p className="intro">{project.description}</p>

      <div className="section-stack">
        <article className="info-panel">
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="tag-list" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        {publicLinks.length > 0 ? (
          <article className="info-panel">
            <h2>Public links</h2>
            <div className="content-list compact-list">
              {publicLinks.map((link) => (
                <a key={link.url} href={link.url} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ) : null}
      </div>

      <Link className="text-action" to={routes.projects}>
        Back to all projects
      </Link>
    </section>
  );
}

export default ProjectDetailPage;
