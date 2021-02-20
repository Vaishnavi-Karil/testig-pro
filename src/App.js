import "./App.css";
import Test from "./Test";
import Portfolio from "./Porfolio/Portfolio";
// import Hooksone from "./CodeStepByStep/CodeHook/Hooksone";
// import Media from "./MediaQuery/Media";
import Icons from "./Material-ui/Icons";
// import UtilityFunction from "./Material-ui/UtilityFunction";

// import Netflix from "./Thapa Technical/Netflix App/Netflix";

function App() {
  return (
    <div className="App">
      <div>
        <Portfolio />
        <Test />
        <Icons />
        {/* <UtilityFunction /> */}
        {/* <Hooksone /> */}
        {/* <Media /> */}
        {/* <Netflix /> */}
      </div>
    </div>
  );
}

export default App;
