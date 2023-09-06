import styled from "styled-components";
import ReactDOM from "react-dom";

const Modal = ({ shouldShow, onRequestClose, children }) => {
  if (!shouldShow) return null;
  return ReactDOM.createPortal(
    <StyledModal onClick={onRequestClose}>
      <div
        className="modal_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="btn" onClick={onRequestClose}>
          X
        </button>
        {children}
      </div>
    </StyledModal>,
    document.getElementById("modal_root")
  );
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  height: 100%;
  widows: 100%;
  background-color: #4d4d4db5;
  overflow: auto;

  .modal_content {
    display: flex;
    flex-direction: column;
    width: 22rem;
    z-index: 10000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.25rem;
    background-color: #fefaeb;
    border-radius: 0.375rem;
  }

  .btn {
    position: relative;
    left: 17.2rem;
    width: fit-content;
    border: none;
    background-color: #ed6d5a;
    color: #fefaeb;
    border-radius: 5px;
    padding: 0 0.8rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    .modal_content {
      width: 35rem;
    }
    .btn {
      left: 30rem;
    }
  }
`;
