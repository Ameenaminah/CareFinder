import { useSidebar } from "../hooks";

export const About = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1>About</h1>
    </main>
  );
};
