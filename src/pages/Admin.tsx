import { useSidebar } from "../hooks";

export const Admin = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1>Admin</h1>
    </main>
  );
};
