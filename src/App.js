import React from "react";
import Scene from "./layouts/body/pages/scene/Scene"; // Import component đã tạo
import Header from "./layouts/header/Header";

// cái này để import các ult nên mình bỏ đi nhé, thay vào đó là file custom
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/BoostrapCustom.scss'
// cái này để thực hiện chức năng

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // để có tooltip, modal, v.v.
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";

import { GlobalProvider } from "./globalContext/GlobalContext";
import tools from "./Tool";
import customedAxios from "./CustomedAxios";

import "./App.css"

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalProvider
        value={{ tools, customedAxios }}
      >
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 999 }}>
          <Header />
          <Body />
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
