import { Link } from "react-router-dom";
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Page not found!</h2>

      <Link className="not-found-link" to="/">
        Back to homepage
        <span className="round" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
