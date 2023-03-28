import "./App.css";
import { AuthContextProvider } from "./AuthContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import "bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
