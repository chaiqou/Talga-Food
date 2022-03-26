import ReactDOM from "react-dom";

// shavi backdrop romelic faravs kvelafers
const BackDrop = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 h-[100vh] bg-blackOverlay" />
  );
};

// top-[20vh] right-[30rem] w-[40em] fixed

// tviton modal
const ModalOverlay = ({ children }) => {
  return (
    <div className=" top-[25rem] max-w-[45rem] w-[90%] m-auto mt-[-5rem] relative  bg-white p-4 rounded-xl shadow-normal z-30 ">
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
