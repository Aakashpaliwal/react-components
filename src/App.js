import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/stopwatch/Button";
import CounterContainer from "./components/counter/CounterContainer";
import ScrollToTop from "./components/Generic Components/ScrollToTop/ScrollToTop";
import ProgressContainer from "./components/Generic Components/progress/ProgressContainer";
import UserProvider from "./components/UserContext";
import ModalContainer from "./components/Generic Components/Modal/ModalContainer";
import StepperContainer from "./components/Generic Components/Stepper/StepperContainer";

function App() {
  return (
    <UserProvider>
      <div>
        {/* <Stopwatch /> */}
        {/* <Button /> */}
        {/* <CounterContainer /> */}
        {/* <ScrollToTop /> */}
        {/* <ProgressContainer /> */}
        {/* <ModalContainer /> */}
        <StepperContainer />
      </div>
    </UserProvider>
  );
}

export default App;
