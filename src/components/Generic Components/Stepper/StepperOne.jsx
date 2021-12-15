import React, { Fragment } from "react";
import "./stepper.scss";

const StepperOne = (props) => {
  return (
    <Fragment>
      <div className="stepper_one_container">
        <input
          type="text"
          className="form-control"
          onChange={(e) => props.setName(e.target.value)}
          value={props.name}
        />
      </div>
    </Fragment>
  );
};

export default StepperOne;
