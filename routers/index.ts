import { routes } from "./routes";

import Dialer from "../pages/Dialer";
import RealTimeReport from "../pages/RealTimeReport";
import OmniDashboard from "../pages/OmniDashboard";
import QcDashboard from "../pages/QcDashboard";

export const ROUTES = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: routes.dashboard,
      children: [
        {
          label: "Dialer",
          path: routes.dashboard_dialer,
          id: "dialer",
          element: Dialer
        },
        {
          label: "Real-Time",
          path: routes.dashboard_real_time_report,
          element: RealTimeReport,
          id: "realtime-report",
        },
        {
          label: "Omni",
          path: routes.dashboard_omni_dashboard,
          element: OmniDashboard,
          id: "omnichannel-dashboard",
        },
        {
          label: "QC Dashboard",
          path: routes.dashboard_qc_dashboard,
          element: QcDashboard,
          id: "qc-dashboard",
        },
      ],
    },
  ];
  