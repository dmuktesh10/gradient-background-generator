import { useState } from "react";
import "./App.css";
import CardContainer from './CardContainer'
function App() {
  const [colorOne, setColorOne] = useState('red')
  const [colorTwo, setColorTwo] = useState('yellow');
  console.log("in app" + colorOne);
  return (
    <div className="App"
    style={{backgroundImage: "linear-gradient(to right,"+ colorOne +" , " + colorTwo +")"}}>
      <CardContainer 
      colorOne={colorOne}
      colorTwo={colorTwo}
      onColorOneChange={setColorOne}
      onColorTwoChange={setColorTwo}/>
    </div>
  );
}

export default App;
