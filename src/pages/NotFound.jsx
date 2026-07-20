import { Link } from 'react-router-dom';
import './NotFound.css';

/**
 * Custom 404 page for unknown routes.
 */
function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__content">
        <span className="notfound__code">404</span>
        <h1>Page Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist or has been moved. Let&apos;s get you
          back on track.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
