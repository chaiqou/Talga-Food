import ReactDOM from "react-dom";

// shavi backdrop romelic faravs kvelafers
const BackDrop = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 h-[100vh] bg-blackOverlay" />
  );
};

// tviton modal
const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[80rem] bg-white p-4 rounded-xl shadow-normal z-30 ">
      <div>{children}</div>
    </div>
  );
};

// portalis divi
const portalElement = document.getElementById("overlays");

// mtavari modal componenti

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
