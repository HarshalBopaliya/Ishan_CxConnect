import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./routers/routes";
import { ROUTES } from "./routers";
import TitleUpdater from "./components/TitleUpdater";
import Login from "./components/Login";
import type React from "react";

const App = () => {
  const isLoggedIn: boolean = true;

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isLoggedIn ? children : <Navigate to={routes.login} replace />;
  };

  const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    return !isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <>
      <TitleUpdater routes={ROUTES} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          {ROUTES.map((route) => {
            // console.log("route", route);
            return (
              <Route
                key={route.id}
                path={route.path}
                element={route.children ? null : <route.element />}
              >
                {route.children?.map((child) => {
                  // console.log("child", child);
                  return (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<child.element />}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Route>
        <Route
          path={routes.login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
