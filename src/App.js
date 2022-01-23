import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CustomRoutes from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
