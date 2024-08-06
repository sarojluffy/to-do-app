import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/navbar";
// import { useParams } from "react-router-dom/cjs/react-router-dom";

const DynamicViewpage = () => {
  const Useloc = useLocation(); // gets the whole URL in theat current location(file)
  const GetUrl = new URLSearchParams(Useloc.search); //parse the URL ,(more specific 'search')
  const GetID = GetUrl.get("id"); // gets the value of the key "id"
  console.log(Useloc);
  const histy = useHistory();
  //   const getparam = useParams(); //gets the whole parameter object
  //   const ParamID = getparam.id; // get the id from the params
  const Localdata = JSON.parse(localStorage.getItem("key"))
    ? JSON.parse(localStorage.getItem("key"))
    : [];
  const DatacorrespondingToID = Localdata[GetID];
  //   // retireve the array with that specific index
  const deletetodo = () => {
    Localdata.splice(GetID, 1); // from the array position defined by GetID delete 1 element
    localStorage.setItem("key", JSON.stringify(Localdata));
    histy.replace("/");
  };
  return (
    <>
      <Navbar />
      <div className="todoLocalstorage">{DatacorrespondingToID}</div>
      <button
        className="gobackbutton"
        onClick={() => {
          histy.push("/");
        }}
      >
        go back
      </button>
      <button style={{ background: "red" }} onClick={deletetodo}>
        DELETE
      </button>
    </>
  );
};
export default DynamicViewpage;
