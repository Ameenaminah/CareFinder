import { FaSearch } from "react-icons/fa";
import { useSidebar } from "../../hooks";
import "./hospital.css";
import { hospitalList } from "../../data";
import { HospitalCard } from "./HospitalCard";

export const Hospitals = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle " : ""}>
      <div className="container">
        <section>
          <form action="" className="searchForm">
            <select name="hospitalFilter" id="" className="hospitalFilter">
              <option value="2">Name</option>
              <option value="1">Specialization</option>
              <option value="3">3</option>
            </select>
            <div className="searchInputContainer">
              <FaSearch color="grey" size={15} />
              <input
                type="text"
                name=""
                id=""
                placeholder="enter search item"
                className="searchInput"
              />
            </div>
            <button className="button searchButton">Search</button>
          </form>
        </section>
        <hr className="divider" />
        <section className="hospitalCardsContainer">
          {hospitalList.map((h) => {
            return (
              <HospitalCard
               hospital={h}
                // onClick={() => handleCardClick(hospital)}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};
