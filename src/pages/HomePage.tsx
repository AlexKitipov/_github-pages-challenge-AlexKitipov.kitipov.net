import { Link } from 'react-router-dom';
import { biography } from '../data/biography';
import { featuredProject } from '../data/projects';
import { routes, getProjectDetailPath } from '../utils/routes';

function HomePage() {
  return (
    <section className="page-card hero-card" aria-labelledby="page-title">
      <p className="eyebrow">Portfolio home</p>
      <h1 id="page-title">{featuredProject.title}</h1>
      <p className="intro">{featuredProject.summary}</p>
      <p className="intro">{biography.philosophy}</p>
      <div className="actions">
        <Link className="primary-action" to={getProjectDetailPath(featuredProject.id)}>
          Explore featured project
        </Link>
        <Link className="secondary-action" to={routes.contact}>
          Get in touch
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
