import { useSidebar } from "../hooks";

export const Home = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1>Home</h1>
    </main>
  );
};
