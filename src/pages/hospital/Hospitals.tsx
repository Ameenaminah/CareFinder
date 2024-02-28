import { FaSearch } from "react-icons/fa";
import { useInjectedService, useSidebar } from "../../hooks";
import "./hospital.css";
import { HospitalCard } from "./HospitalCard";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Hospitals = () => {
  const { isSidebarOpen } = useSidebar();
  const { hospitalService } = useInjectedService();

  const { data: hospitals, isLoading } = useQuery({
    queryKey: ["hospital"],
    queryFn: async () => {
      return await hospitalService.getHospitals();
    },
  });

  return (
    <>
      <main className={isSidebarOpen ? "space-toggle " : ""}>
        <div className="container">
          <section>
            <form action="" className="searchForm">
              <div className="hospitalFilterContainer">
                <select name="hospitalFilter" id="" className="hospitalFilter">
                  <option value="2">Name</option>
                  <option value="1">Specialization</option>
                  <option value="3">3</option>
                </select>
              </div>
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
          {!isLoading && hospitals?.items ? (
            <section className="hospitalCardsContainer">
              {hospitals?.items.map((hospital) => {
                return <HospitalCard key={hospital.id} hospital={hospital} />;
              })}
            </section>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </main>
      <Outlet />
    </>
  );
};
