import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
const Mainpage = () => {
  // Authcheck(); //auth function called
  const navigate = useNavigate();
  const xyz = JSON.parse(localStorage.getItem("key"));
  const DatafromLocalStorage = xyz ? xyz : [];

  const name = "saroj";
  const location = "pokhara";
  console.log(`my name is ${name} and i live in ${location}`); //to change dynamically in between strings

  const del = () => {
    localStorage.clear();
    DatafromLocalStorage.splice(0, DatafromLocalStorage.length);
    localStorage.setItem("key", JSON.stringify(DatafromLocalStorage));
    navigate("/", { replace: true });
  };
  return (
    <>
      <Navbar />

      <div>
        {DatafromLocalStorage && DatafromLocalStorage.length > 0 ? (
          <>
            <div>
              {DatafromLocalStorage.map((xyz, index) => (
                <div className="todoLocalstorage " key={index}>
                  {xyz}
                  <Link to={`/view?id=${index}`}>
                    {/* back tick is used here , also later dynamic value is sent */}
                    <BsEye size={"20px"} />
                  </Link>
                </div>
              ))}
              <button onClick={del}>delete all </button>
            </div>
          </>
        ) : (
          <>
            <p>
              nothing here . click <Link to="/add">here </Link>to add
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Mainpage;
