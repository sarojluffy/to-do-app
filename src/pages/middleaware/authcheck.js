import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Authcheck = () => {
  const histroy = useHistory();
  !localStorage.getItem("loggedd") && histroy.replace("/login");
};

export default Authcheck;
