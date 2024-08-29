import Navbar from "./navbar";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
              navigate("/", { replace: true });
            }}
          >
            logout
          </p3>{" "}
        </div>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("loggedd", true);
            navigate("/add", { replace: true });
          }}
        >
          Log in!
        </button>
      )}
      <Link to="/login/simple">
        <button>click me for nested</button>
      </Link>
      <Routes>
        <Route
          path="/simple"
          element={<div>this is an example of nested routing </div>}
        />
      </Routes>
    </>
  );
};

export default Login;
