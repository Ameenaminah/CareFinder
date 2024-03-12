import { useSidebar } from "../hooks";

export const Reviews = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1 style={{ textAlign: "center", marginTop: "3em" }}>Coming soon...</h1>
    </main>
  );
};
