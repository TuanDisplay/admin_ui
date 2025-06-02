import config from "~/config";
import Dashboard from "~/pages/Dashboard";
import ExpertManagement from "~/pages/ExpertManagement";
import IdeaDeMana from "~/pages/IdeaDeMana";
import IdeaManagement from "~/pages/IdeaManagement";
import ProblemDeMana from "~/pages/ProblemDeMana";
import ProblemManagement from "~/pages/ProblemManagement";
import TransactionHistory from "~/pages/TransactionHistory";
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
    path: config.routes.ideaMntDe,
    component: IdeaDeMana,
  },
  {
    path: config.routes.problemMnt,
    component: ProblemManagement,
  },
  {
    path: config.routes.problemMntDe,
    component: ProblemDeMana,
  },
  {
    path: config.routes.expertMnt,
    component: ExpertManagement,
  },
  {
    path: config.routes.userMnt,
    component: UserManagement,
  },
  {
    path: config.routes.transaction,
    component: TransactionHistory,
  },
];

export { authRoutes, priviteRoutes };
