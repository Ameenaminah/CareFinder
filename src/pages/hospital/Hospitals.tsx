import { useInjectedService, useSidebar } from "../../hooks";
import "./hospital.css";
import { HospitalCard, SearchForm } from ".";
import { Link, Outlet, useLoaderData } from "react-router-dom";
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
        <div className="hospitalContainer">
          <SearchForm />
          <Link to="createHospital">Create New</Link>
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
