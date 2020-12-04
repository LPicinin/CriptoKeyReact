import React from "react";

import "./styles/global.css";

import Routes from "./routes";
import Title from "./components/Title"

function App() {
  return (
      <div className="App">
        <Title title='CriptoKey'/>
      <Routes />
    </div>
  );
}

export default App;
