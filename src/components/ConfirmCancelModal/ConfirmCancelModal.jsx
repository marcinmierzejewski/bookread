import { CardModalWrapper, Modal } from "./ConfirmCancelModal.styled";

export const ConfirmCancelModal = ({
  isDeleteOpen,
  modalContent,
  setIsDeleteOpen,
  confirmingModalAction,
  nameOfConfirm
}) => {
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

