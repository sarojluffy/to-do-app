import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/defaultpage/mainpage.js";
import Addpage from "../pages/add page/addpage.js";
import DynamicViewpage from "../pages/view/Viewpage.js";
import Login from "../components/logged.js";
import Notfound from "../components/Notfoundpage.js";

const Routesa = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Mainpage />} />
        {/* exact renders just this component without merging with other components */}
        <Route path="/add" element={<Addpage />} />

        {/* here the path is for components for our website , dont confuse with the other files and locations*/}
        {/* /add vaneko hamle diyeko path ho component lai */}
        {/* <Route path="/view/:id" component={DynamicViewpage} exact /> */}
        <Route path="/view" element={<DynamicViewpage />} />

        <Route path="/login/*" element={<Login />} />
        <Route element={<Notfound />} />
        {/* defines a path for non existing  */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routesa; /*in this Routes component we are creating routes for diff other components   */
