import { useInjectedService, useSidebar } from "../../hooks";
import "./hospital.css";
import { HospitalCard, SearchForm } from ".";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components";

export const Hospitals = () => {
  const { isSidebarOpen } = useSidebar();
  const { hospitalService } = useInjectedService();

  const {
    isLoading,
    error,
    data: hospitals,
  } = useQuery({
    queryKey: ["hospitals"],
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
          {error && <p>{error.message}</p>}
          {!isLoading && hospitals?.items ? (
            <section className="hospitalCardsContainer">
              {hospitals?.items.map((hospital) => {
                return <HospitalCard key={hospital.id} hospital={hospital} />;
              })}
            </section>
          ) : (
            <Spinner />
          )}
        </div>
      </main>
      <Outlet />
    </>
  );
};
