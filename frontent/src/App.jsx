import React from "react";
import { Route,Routes } from "react-router-dom";
import "./App.css";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import User from "./Pages/UserPage/User";
import Header from "./Components/Header/Header";
import News from "./Pages/News/News";

function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
      <div className="app">
        <Routes>
          <Route path="/" element={<User/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
