import { Link } from "react-router-dom";
import { HomeImage } from "../assets";
import { useSidebar } from "../hooks";
import "./home/home.css";

export const About = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <section className="home">
        <div className="home-img">
          <img src={HomeImage} className="logo" alt="Home" />
        </div>
        <div className="content">
          <h3 className="home-title">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            consectetur quas aut, vero earum nemo totam unde, dicta aliquid, a
            architecto. Dignissimos, corrupti! Suscipit magni quisquam
            repudiandae ut esse rem?
          </p>
          <div className="home-button button">
            <Link to={"#"}>Read more</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
