import { BsEye } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/navbar";
const Mainpage = () => {
  // Authcheck(); //auth function called
  const his = useHistory();
  const xyz = JSON.parse(localStorage.getItem("key"));
  const DatafromLocalStorage = xyz ? xyz : [];

  const name = "saroj";
  const location = "pokhara";
  console.log(`my name is ${name} and i live in ${location}`); //to change dynamically in between strings

  const del = () => {
    localStorage.clear();
    DatafromLocalStorage.splice(0, DatafromLocalStorage.length);
    localStorage.setItem("key", JSON.stringify(DatafromLocalStorage));
    his.replace("/");
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
