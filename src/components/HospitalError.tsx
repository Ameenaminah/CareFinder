import { Link } from "react-router-dom";
import "./styles.css";

export const HospitalError = () => {
  return (
    <section className="hospital-error-container">
      <h1>Sorry, the hospital does not exist</h1>
      <div className="hospital-error-button-container">
        <Link to={"../../hospitals/create"} className="button">
          Add new Hospital
        </Link>
        <Link to={"../../hospitals"} className="button">
          Bact to Hospitals
        </Link>
      </div>
    </section>
  );
};
