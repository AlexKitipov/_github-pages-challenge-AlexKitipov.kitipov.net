import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

function HomePage() {
  return (
    <section className="page-card hero-card" aria-labelledby="page-title">
      <p className="eyebrow">Portfolio home</p>
      <h1 id="page-title">Алгоритъмът на деня | Algorithm of the Day</h1>
      <p className="intro">
        Welcome to Aleksandar Kitipov&apos;s modern portfolio hub for projects, skills,
        writing, and learning experiments.
      </p>
      <p className="intro">
        This shell keeps the original educational spirit of the legacy site while
        introducing routed React sections for the next build milestones.
      </p>
      <div className="actions">
        <Link className="primary-action" to={routes.projects}>
          Explore projects
        </Link>
        <Link className="secondary-action" to={routes.contact}>
          Get in touch
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
