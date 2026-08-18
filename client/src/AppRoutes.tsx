import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/members/Members";
import CreateMember from "./pages/members/CreateMember";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "members/new",
        element: <CreateMember />,
      },
    ],
  },
]);
