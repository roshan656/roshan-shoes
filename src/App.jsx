import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateLayout from "./routes/PrivateLayout";
import PublicLayout from "./routes/PublicLayout";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/Routes";
function App() {
  return (
    <>
      <Routes>
        {routes?.map((curItem, idx) => (
          <Fragment key={idx}>
            {curItem.private ? (
              <Route element={<PrivateLayout />}>
                <Route path={curItem.path} element={curItem.element} />
              </Route>
            ) : curItem.public ? (
              <Route element={<PublicLayout />}>
                <Route path={curItem.path} element={curItem.element} />
              </Route>
            ) : (
              <Route path={curItem.path} element={curItem.element} />
            )}
          </Fragment>
        ))}
      </Routes>
    </>
  );
}

export default App;
