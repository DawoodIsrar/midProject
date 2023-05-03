import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import History from "./components/History";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <History />
    </>
  );
}

export default App;
