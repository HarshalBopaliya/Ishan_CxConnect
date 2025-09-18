import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./shared/layouts/Main";
import { routes } from "./routes/routes";
import { ROUTES } from "./routes";
import TitleUpdater from "./shared/components/TitleUpdater";
import Login from "./shared/components/Login";
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
              <Main />
            </PrivateRoute>
          }
        >
          {ROUTES.map((route) => {
            // console.log("route", route);

            const Element = route.element;

            return (
              <Route
                key={route.id}
                path={route.path}
                element={route.children ? null : <Element />}
              >
                {route.children?.map((child) => {
                  // console.log("child", child);
                  const ChildElement = child.element;
                  return (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<ChildElement />}
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
