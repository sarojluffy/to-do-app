import Routes from "./routes/Routes";
import "./index.css";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
