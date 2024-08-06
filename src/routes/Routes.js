import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Mainpage from "../pages/defaultpage/mainpage.js";
import Addpage from "../pages/add page/addpage.js";
import DynamicViewpage from "../pages/view/Viewpage.js";
import Login from "../components/logged.js";
import Notfound from "../components/Notfoundpage.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={Mainpage} exact></Route>
        {/* exact renders just this component without merging with other components */}
        <Route path="/add" exact>
          {JSON.parse(localStorage.getItem("loggedd")) ? (
            <>
              <Addpage />
            </>
          ) : (
            <Redirect to="/login" /> //redirects automatically
          )}
        </Route>
        {/* here the path is for components for our website , dont confuse with the other files and locations*/}
        {/* /add vaneko hamle diyeko path ho component lai */}
        {/* <Route path="/view/:id" component={DynamicViewpage} exact /> */}
        <Route path="/view" exact>
          <DynamicViewpage /> {/* can be written thos way alternatively*/}
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="*" component={Notfound} exact />
        {/* defines a path for non existing  */}
      </Switch>
    </BrowserRouter>
  );
};
export default Routes; /*in this Routes component we are creating routes for diff other components   */
