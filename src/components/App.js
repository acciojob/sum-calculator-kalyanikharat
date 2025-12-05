import React from "react";
import './../styles/App.css';
import SumCalculator from "./SumCalculator";   // import the component

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <SumCalculator />
    </div>
  )
}

export default App;
//npm install --save-dev webpack-dev-server