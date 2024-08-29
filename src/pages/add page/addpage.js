import Navbar from "../../components/navbar";
import { useRef } from "react";
import Authcheck from "../middleaware/authcheck";
import { useNavigate } from "react-router-dom";

const Addpage = () => {
  const refval = useRef();
  const navigate = useNavigate();
  // if (localStorage.getItem("loggedd")) {
  //   /*do nothing*/
  // } else {
  //   histry.replace("/login");
  // }
  Authcheck(); //auth function calle
  // localStorage.getItem("loggedd") ? (() => {})() : histry.replace("/login"); //this is an alternative
  // !localStorage.getItem("loggedd") && histry.replace("/login");//this is an alternative
  const abc = (e) => {
    e.preventDefault();
    const P = JSON.parse(localStorage.getItem("key"));
    const todo_array = P ? P : [];
    const todo_newdata = refval.current.value;
    localStorage.setItem("key", JSON.stringify([...todo_array, todo_newdata]));
    navigate("/");
  };

  /* const abc = (e) => {
    e.preventDefault();
    const P = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : [];
    const todo_newdata = refval.current.value;
    const updatedTodos = [...P, todo_newdata];
    localStorage.setItem("key", JSON.stringify(updatedTodos));
    refval.current.value = ''; // Clear the input after adding
  };
*/

  return (
    <>
      <Navbar />
      <div className="form_controls">
        <h2>add to-do</h2>
        <form onSubmit={abc}>
          <input type="text" ref={refval}></input>
          <button>add to do </button>
        </form>
      </div>
    </>
  );
};
export default Addpage;
