import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav_bar">
      navbar
      <div className="menu">
        <Link to="/">
          <div>home</div>
        </Link>
        <Link to="/add">
          <div>add todo</div>
        </Link>
        <Link to="/login">
          <div>login</div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
