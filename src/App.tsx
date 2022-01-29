import React from "react";
import AppRouter from "./components/AppRouter";

import "./App.css";
import Header from "./components/common/Header";
import ScrollToTop from "./components/hoc/ScrollToTop";

const App: React.FC = () => {
  return (
    <div className="App relative">
      <div className="flex flex-col items-center">
        <Header />
        <div className="container mx-auto">
          <ScrollToTop>
            <AppRouter />
          </ScrollToTop>
        </div>
      </div>
    </div>
  );
};

export default App;
