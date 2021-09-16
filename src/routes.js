import Dashboard from "./Views/Dashboard";
import Map from "./Views/Map";
import Table from "./Views/Table";
import UserProfile from "./Views/UserProfile";
import Task from "./Views/Task"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Admin",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Map",
    name: "Map",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/Table",
    name: "Table",
    component: Table,
    layout: "/admin",
  },
  {
    path: "/UserProfile",
    name: "Profile",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/Task",
    name: "Task",
    component: Task,
    layout: "/admin",
  },
];
export default dashboardRoutes;
