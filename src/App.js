import "./App.css";
// import Test from "./Test";
// import Hooksone from "./CodeStepByStep/CodeHook/Hooksone";

// import Media from "./MediaQuery/Media";
// import Netflix from "./Thapa Technical/Netflix App/Netflix";
// import Forms from "./CodeStepByStep/FormHandling/Forms";
// import UtilityFunction from "./Material-ui/UtilityFunction";
// import IconsMatrial from "./Material-ui/IconsMatrial";
import FormTask from "./FormTask/FormTask";
import Portfolio from "./Porfolio/Portfolio";
import FormFun from "./Udemy/SectionTwentyThree/FormsFun";
// import EmployeeFormWithMap from "./FormTask/EmployeFormWithMap";
// import FormClassess from "./CodeStepByStep/FormHandling/FormsClassess";
// import RenderList from "./TodoApp/RenderList";
// import HomeContainer from "./Containers/HomeContainer";
// import Employeewithmap from "./FormTask/EmployeFormWithMap";
function App() {
  return (
    <div className="App">
      <div>
        {/* <EmployeeRegistration /> */}
        {/* <Employeewithmap /> */}
        <FormTask />
        {/* <HomeContainer /> */}
        {/* below component without Redux  */}
        {/* <RenderList /> */}
        {/* <FormClassess /> */}
        {/* <Forms /> */}
        <Portfolio />
        <FormFun />
        {/* <IconsMatrial /> */}
        {/* <UtilityFunction /> */}
        {/* <Test /> */}
        {/* <Hooksone /> */}
        {/* <Media /> */}
        {/* <Netflix /> */}
      </div>
    </div>
  );
}

export default App;
