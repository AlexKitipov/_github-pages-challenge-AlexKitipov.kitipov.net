import { Link } from 'react-router-dom';
import { getProjectDetailPath } from '../utils/routes';

function ProjectsPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">Projects</p>
      <h1 id="page-title">Portfolio Projects</h1>
      <p className="intro">
        A routed project index shell for featured applications, experiments, and
        algorithm practice.
      </p>
      <div className="content-list" aria-label="Sample project links">
        <Link to={getProjectDetailPath('algorithm-of-the-day')}>Algorithm of the Day</Link>
        <Link to={getProjectDetailPath('portfolio-foundation')}>Portfolio Foundation</Link>
      </div>
    </section>
  );
}

export default ProjectsPage;
