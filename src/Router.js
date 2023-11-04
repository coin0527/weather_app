import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pagenotfound } from "./pages/Pagenotfound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
