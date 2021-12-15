import React from "react";
import StepperOne from "./StepperOne";
import StepperThree from "./StepperThree";
import StepperTwo from "./StepperTwo";
import "./stepper.scss";
import Done from "./Done";

const StepperContainer = () => {
  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState("");

  const nextHandler = () => {
    setStep((step) => step + 1);
  };

  const prevHandler = () => {
    setStep((step) => step - 1);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="step_number_container">
            <div
              className={
                step > 1
                  ? "step_number_item step_number_item--done"
                  : step == 1
                  ? "step_number_item step_number_item--active"
                  : "step_number_item"
              }
            >
              1
            </div>
            <div
              className={
                step > 2
                  ? "step_number_item step_number_item--done"
                  : step == 2
                  ? "step_number_item step_number_item--active"
                  : "step_number_item"
              }
            >
              2
            </div>
            <div
              className={
                step > 3
                  ? "step_number_item step_number_item--done"
                  : step == 3
                  ? "step_number_item step_number_item--active"
                  : "step_number_item"
              }
            >
              3
            </div>
          </div>
          {step == 1 && <StepperOne name={name} setName={setName} />}

          {step == 2 && <StepperTwo />}

          {step == 3 && <StepperThree />}
          {step == 4 && <Done />}
          <div className="button_container">
            <button
              className="btn btn-primary"
              onClick={prevHandler}
              disabled={step == 1 ? true : false}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={nextHandler}
              disabled={step > 3 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperContainer;
