import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <header>Saving Group Management</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
