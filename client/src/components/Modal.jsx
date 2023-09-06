import styled from "styled-components";

const Modal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <StyledModal onClick={onRequestClose}>
      <div
        classname="modal_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button classname="btn" onClick={onRequestClose}>
          X
        </button>
        {children}
      </div>
    </StyledModal>
  ) : null;
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  height: 100%;
  widows: 100%;
  background-color: #0000002f;
  overflow: auto;

  .modal_content {
    width: 75%;
    padding: 1.25rem;
    background-color: rgb(203 213 225);
    border-radius: 0.375rem;
  }

  .btn {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;
