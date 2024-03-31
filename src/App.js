import "./App.css";
import Lottie from "lottie-react";
import sealAnimation from "../src/seals.json";

function App() {
  return (
    <div className="App">
      <div>
        <Lottie animationData={sealAnimation} />{" "}
      </div>
    </div>
  );
}

export default App;
