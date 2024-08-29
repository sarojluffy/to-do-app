import { useNavigate } from "react-router-dom";

const Authcheck = () => {
  const navigate = useNavigate();
  !localStorage.getItem("loggedd") && navigate("/login", { replace: true });
};

export default Authcheck;
