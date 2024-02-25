import { useSidebar } from "../hooks";

export const Reviews = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <h1>Reviews</h1>
    </main>
  );
};
