import "./App.css";
import Hooksone from "./CodeStepByStep/CodeHook/Hooksone";
import Media from "./MediaQuery/Media";
import Icons from "./Material-ui/Icons";
import UtilityFunction from "./Material-ui/UtilityFunction";
import Portfolio from "./Porfolio/Portfolio";
import Netflix from "./Thapa Technical/Netflix App/Netflix";

function App() {
  return (
    <div className="App">
      <div>
        <Portfolio />
        <Netflix />
        <UtilityFunction />
        <Icons />
        <Hooksone />
        <Media />
      </div>
    </div>
  );
}

export default App;
