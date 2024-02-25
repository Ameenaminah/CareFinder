import { useSidebar } from "../hooks";

export const Contact = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1>Contact</h1>
    </main>
  );
};
