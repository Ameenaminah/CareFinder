import { useSidebar } from "../../hooks";
import { HomeImage } from "../../assets";
import "./home.css";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Home = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <section className="home">
        <div className="home-img">
          <img src={HomeImage} className="logo" alt="Home" />
        </div>
        <div className="content">
          <h3 className="home-title">Find Nearest Hospital</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum
            aliquid! Commodi quos sunt ratione!
          </p>
          <div className="home-button button">
            <Link to={"../contact"}>Contact us</Link>
            <FaChevronRight />
          </div>
        </div>
      </section>
    </main>
  );
};
