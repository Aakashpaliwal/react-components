import React from "react";
import Modal from "./Modal";
import "./modal.scss";

const ModalContainer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-4">
      <button className="modal_btn" onClick={modalHandler}>
        {showModal ? "close" : "open"}
      </button>
      <Modal
        header={"Header"}
        body={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        closeModal={closeModal}
        showModal={showModal}
      />
    </div>
  );
};

export default ModalContainer;
