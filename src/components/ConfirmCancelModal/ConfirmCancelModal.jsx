import { useEffect } from "react";
import { CardModalWrapper, Modal } from "./ConfirmCancelModal.styled";

export const ConfirmCancelModal = ({
  isDeleteOpen,
  modalContent,
  setIsDeleteOpen,
  confirmingModalAction,
  nameOfConfirm
}) => {
  //press escape to close modal
  useEffect(() => {
    const close = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setIsDeleteOpen(false);
      }
    };
    if (isDeleteOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [isDeleteOpen, setIsDeleteOpen]);

  return (
    <CardModalWrapper isDeleteOpen={isDeleteOpen} onClick={()=>setIsDeleteOpen(false)}>
      <Modal>
        <p>{modalContent}</p>
        <div>
          <button onClick={()=>{
            console.log("cancel")
            setIsDeleteOpen(false)
          }} type="button">
            cancel
          </button>
          |
          <button onClick={confirmingModalAction} type="button">
            {nameOfConfirm}
          </button>
        </div>
      </Modal>
    </CardModalWrapper>
  );
};

