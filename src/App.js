import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/stopwatch/Button";
import CounterContainer from "./components/counter/CounterContainer";
import ScrollToTop from "./components/Generic Components/ScrollToTop/ScrollToTop";
import ProgressContainer from "./components/Generic Components/progress/ProgressContainer";
import UserProvider from "./components/UserContext";
import ModalContainer from "./components/Generic Components/Modal/ModalContainer";

function App() {
  return (
    <UserProvider>
      <div className="App">
        {/* <Stopwatch /> */}
        {/* <Button /> */}
        {/* <CounterContainer /> */}
        {/* <ScrollToTop /> */}
        {/* <ProgressContainer /> */}
        <ModalContainer />
      </div>
    </UserProvider>
  );
}

export default App;
