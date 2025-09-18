import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type RouteType = { path: string; label: string; children?: Array<RouteType> };
type Props = { routes: Array<RouteType> };

const TitleUpdater: React.FC<Props> = ({ routes }) => {
  const location = useLocation();

  const getAllRoutes = (routes: Array<RouteType>): Array<RouteType> => {
    return routes.flatMap((route) =>
      route?.children ? [route, ...route.children] : route
    );
  };

  useEffect(() => {
    const allRoutes = getAllRoutes(routes);
    const current = allRoutes.find((r) => r.path === location.pathname);

    if (current) {
      document.title = `${current.label} - ISHAAN`;
    } else {
      document.title = "My App";
    }
  }, [location, routes]);

  return null;
};

export default TitleUpdater;
