import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./routers/routes";
import Login from "./components/Login";
import { ROUTES } from "./routers";

const App = () => {
  const isLoggedIn: boolean = true;

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Layout /> : <Navigate to={routes.login} />}
      >
        {ROUTES.map((route) => (
          <Route key={route.id} path={route.path}>
            {route.children?.map((child) => (
              <Route
                key={child.id}
                path={child.path}
                element={<child.element />}
              />
            ))}
          </Route>
        ))}
      </Route>
      <Route path={routes.login} element={<Login />} />
    </Routes>
  );
};

export default App;
