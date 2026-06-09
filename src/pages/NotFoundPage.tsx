import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

function NotFoundPage() {
  return (
    <section className="page-card" aria-labelledby="page-title">
      <p className="eyebrow">404</p>
      <h1 id="page-title">Page not found</h1>
      <p className="intro">
        The route you requested does not exist in the portfolio yet.
      </p>
      <Link className="primary-action" to={routes.home}>
        Return home
      </Link>
    </section>
  );
}

export default NotFoundPage;
