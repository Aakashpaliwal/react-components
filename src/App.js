import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";
// import Button from "./components/stopwatch/Button";
import CounterContainer from "./components/counter/CounterContainer";
import ScrollToTop from "./components/Generic Components/ScrollToTop/ScrollToTop";
import ProgressContainer from "./components/Generic Components/progress/ProgressContainer";
import UserProvider from "./components/UserContext";
import ModalContainer from "./components/Generic Components/Modal/ModalContainer";
import StepperContainer from "./components/Generic Components/Stepper/StepperContainer";
import Parent from "./components/Parent";
import HOC from "./components/HOC/Hoc";
import UsersList from "./components/HOC/UsersList";
import ArticleList from "./components/HOC/ArticleList";
import Counter from "./components/Errorboundary/Counter";
import ErrorBoundary from "./components/Errorboundary/ErrorBoundary";
import Dashboard from "./components/Dashboard/Dashboard";
import Preference from "./components/Dashboard/Preference";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Dashboard/Login";
import { getToken, onMessageListener } from "./components/Firebase";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Parent from "./Parent";

// const Child = () => {
//   console.log("render"); // fires only once - on initial render
//   return <div>I'm Child</div>;
// };

// const MChild = React.memo(Child);
// const Parent = (props) => <div>{props.children}</div>;
// const MParent = React.memo(Parent);

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  const [count, setCount] = React.useState(0);
  const [users, setUsers] = React.useState(["Users1", "Users2", "Users3"]);

  const Users = HOC(UsersList, users);
  const Article = HOC(ArticleList, ["Article1", "Article2", "Article3"]);

  return (
    <UserProvider>
      <div>
        {/* <Stopwatch /> */}
        {/* <Button /> */}
        {/* <CounterContainer /> */}
        {/* <ScrollToTop /> */}
        {/* <ProgressContainer /> */}
        {/* <ModalContainer /> */}
        {/* <StepperContainer /> */}
        {/* <button onClick={() => setCount(count + 1)}>increment {count}</button>
        <Parent name="john" age="56" count={count} /> */}
        {/* <button onClick={() => setCount(count + 1)}>increment {count}</button>
        <MParent>
          <MChild></MChild>
        </MParent> */}
        {/* <Parent /> */}
        {/* <Article />
        <Users /> */}
        {/* <Users />
        <Article /> */}
        {/* <ErrorBoundary>
          <Counter />
        </ErrorBoundary> */}
        {/* <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/preference" exact element={<Preference />} />
        </Routes> */}
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          animation
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            minWidth: 200,
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
        <header className="App-header">
          {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
          {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
