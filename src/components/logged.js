import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const ht = useHistory();

  return (
    <>
      <Navbar />

      <button
        onClick={() => {
          localStorage.setItem("loggedd", true);
          ht.replace("/add");
        }}
      >
        Log in!
      </button>
      <Link to="/login/simple">
        <button>click me for nested</button>
      </Link>

      <Route path="/login/simple">
        <div>this is an example of nested routing </div>
      </Route>
    </>
  );
};

export default Login;
