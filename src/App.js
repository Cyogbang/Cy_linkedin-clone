import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div cllassName="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element ={<div>
            <Home />
            <Header />
          </div>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
