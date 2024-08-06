import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/navbar";
import { useRef } from "react";

const Addpage = () => {
  const refval = useRef();
  const histry = useHistory();
  const abc = (e) => {
    e.preventDefault();
    const P = JSON.parse(localStorage.getItem("key"));
    const todo_array = P ? P : [];
    const todo_newdata = refval.current.value;
    localStorage.setItem("key", JSON.stringify([...todo_array, todo_newdata]));
    histry.push("/");
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

        <h3>to do list </h3>
        <div className="todo_container">
          <div>todo 1 </div>
          <div>todo 2</div>
          <div>todo 3</div>
        </div>
      </div>
    </>
  );
};
export default Addpage;
