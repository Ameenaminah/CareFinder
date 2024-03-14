import { Link } from "react-router-dom";
import { NotFoundImage } from "../assets";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="not-found-image">
        <img src={NotFoundImage} className="notFound" alt="Not Found Image" />
      </div>
      <p className="not-found-text">
        Sorry, the page you are looking for could not be found or has been
        removed.
      </p>
      <Link to={"/"} className="button">
        Back to Home
      </Link>
    </div>
  );
};
