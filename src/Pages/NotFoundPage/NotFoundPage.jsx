import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2 >Page not found!</h2>
      
      <Link className={css.link} to="/">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
