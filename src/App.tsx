import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default App;
