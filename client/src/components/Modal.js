import React  from "react";
import * as AiIcons from 'react-icons/ai'
const Modal = ({ active, setActive, children }) => {
    return(
        <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className={active ? "modal-content active" : "modal-content"}  onClick={e => e.stopPropagation()}>
            <i className=""onClick={() => {setActive(false);}}>
              X
            </i>
            <div className="modal-body">{children}</div>
          </div>
        </div>
        <div
          onClick={() => {
            setActive(false);
          }}
          className={active ? "modal-overlay open-overlay" : "modal-overlay"}
        ></div>
      </>     
    );  
}
export default Modal;