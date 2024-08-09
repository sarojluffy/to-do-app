import { Link } from "react-router-dom/cjs/react-router-dom";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./navbar";

const Login = () => {
  const ht = useHistory();
  //   if (localStorage.getItem("loggedd")) {
  //     <Mainpage />;
  //   } else {
  //   }
  // localStorage.getItem("loggedd") ? ht.replace("/home") : (() => {})();

  return (
    <>
      <Navbar />

      {localStorage.getItem("loggedd") ? (
        <div>
          you are logged in.
          <p3
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("loggedd");
              ht.replace("/");
            }}
          >
            logout
          </p3>{" "}
        </div>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("loggedd", true);
            ht.replace("/add");
          }}
        >
          Log in!
        </button>
      )}
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
