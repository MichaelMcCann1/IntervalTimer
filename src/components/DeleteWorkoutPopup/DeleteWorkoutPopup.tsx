import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { workoutDataState } from "../../atoms/workoutData";
import { selectedWorkoutIndexState } from "../../atoms/selectedWorkoutDataIndex";

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  text-align: center;
  font-size: 26px;
  white-space: nowrap;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  background: inherit;
  cursor: pointer;
  padding: 10px 20px;
`;

interface Props {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteWorkoutPopup({ modalOpen, setModalOpen }: Props) {
  const navigate = useNavigate();
  const selectedWorkoutIndex = useRecoilValue(selectedWorkoutIndexState);
  const [workoutData, setWorkoutData] = useRecoilState(workoutDataState);

  const deleteWorkout = () => {
    navigate("/");
    const workoutDataCopy = [...workoutData];
    workoutDataCopy.splice(selectedWorkoutIndex, 1);
    setWorkoutData(workoutDataCopy);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Container>
        <Title>Delete Workout?</Title>
        <ButtonsWrapper>
          <Button
            onClick={deleteWorkout}
            style={{ background: "rgb(249, 12, 83)", color: "white" }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            style={{ background: "rgb(230, 230, 230" }}
          >
            No
          </Button>
        </ButtonsWrapper>
      </Container>
    </Modal>
  );
}
