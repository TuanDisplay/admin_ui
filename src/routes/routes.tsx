import config from "~/config";
import Dashboard from "~/pages/Dashboard";
import ExpertManagement from "~/pages/ExpertManagement";
import IdeaManagement from "~/pages/IdeaManagement";
import ProblemManagement from "~/pages/ProblemManagement";
import UserManagement from "~/pages/UserManagement";

const authRoutes = [];

const priviteRoutes = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
  },
  {
    path: config.routes.ideaMnt,
    component: IdeaManagement,
  },
  {
    path: config.routes.problemMnt,
    component: ProblemManagement,
  },
  {
    path: config.routes.expertMnt,
    component: ExpertManagement,
  },
  {
    path: config.routes.userMnt,
    component: UserManagement,
  },
];

export { authRoutes, priviteRoutes };
