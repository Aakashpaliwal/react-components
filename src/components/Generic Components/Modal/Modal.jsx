import React, { Fragment } from "react";
import "./modal.scss";

const Modal = ({ header, body, closeModal, showModal }) => {
  return (
    <Fragment>
      {showModal && (
        <Fragment>
          <div className="modal_backdrop" onClick={closeModal}></div>
          <div className="modal_container mt-4">
            <div className="modal_header">
              <p>
                {header}
                <span className="modal_closebtn">
                  <button onClick={closeModal}>close</button>
                </span>
              </p>
            </div>
            <div className="modal_body">{body}</div>
            <div className="modal_footer"></div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Modal;
