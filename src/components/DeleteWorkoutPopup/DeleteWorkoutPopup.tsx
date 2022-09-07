import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";

interface Props {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteWorkoutPopup({ modalOpen, setModalOpen }: Props) {
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <h1>hello</h1>
    </Modal>
  );
}
