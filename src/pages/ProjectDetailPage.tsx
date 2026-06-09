import { Link, useParams } from 'react-router-dom';
import { routes } from '../utils/routes';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const displayName = projectId?.replaceAll('-', ' ') ?? 'selected project';

  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Project detail</p>
      <h1 id="page-title">Project: {displayName}</h1>
      <p className="intro">
        This detail shell confirms dynamic routing for individual portfolio projects.
      </p>
      <p className="page-note">
        Case studies, screenshots, technology notes, and repository links can be added
        here as project data is introduced.
      </p>
      <Link className="text-action" to={routes.projects}>
        Back to all projects
      </Link>
    </section>
  );
}

export default ProjectDetailPage;
