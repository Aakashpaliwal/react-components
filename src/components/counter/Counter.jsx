import React, { useContext } from "react";
import "./counter.scss";
import Styled from "styled-components";
import { UserContext } from "../UserContext";

const Button = Styled.button`
    width : ${(props) => props.width}px;
    `;

const Header = Styled.h2`
   color : ${(props) => (props.primary ? "red" : "blue")}
 `;

const Counter = ({ id, value, increment, decrement, width }) => {
  const context = useContext(UserContext);
  return (
    <div className="counter_container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="counter_content">
              <span>{value}</span>
              <Button
                className="btn btn-success"
                onClick={() => increment(id)}
                width={width}
              >
                plus
              </Button>
              <button className="btn btn-danger" onClick={() => decrement(id)}>
                minus
              </button>
              <strong>{context.name}</strong>
            </div>

            <Header primary>something</Header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
