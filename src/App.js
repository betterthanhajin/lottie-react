import "./App.css";
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import sealAnimation from "../src/seals.json";
import coffeeAnimation from "../src/coffie.json";

const options = {
  animationData: sealAnimation,
};

const Example = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 300],
      },
    ],
  });

  return Animation;
};

function App() {
  return (
    <div className="App">
      <div>
        <Example /> <Lottie animationData={coffeeAnimation} />
      </div>
    </div>
  );
}

export default App;
