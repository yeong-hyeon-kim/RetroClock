import "./App.css";
import Indicator from "./components/Indicator";
import Constellation from "./components/Constellation";
import React from 'react';
// import React, {useState} from 'react';

function App() {

  // let[IndicatorSetting, EditSetting] = useState(["한글","시간-날짜"]);

  return (
    <div className="App-Cover">
      {/* <Indicator IC={IndicatorSetting}></Indicator> */}
      <Indicator></Indicator>
      <Constellation></Constellation>
    </div>
  );
}

export default App;