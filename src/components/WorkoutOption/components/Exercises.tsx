import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataKeys } from "../../../constants/workoutData";
import { selectedWorkoutDataState } from "../../../atoms/selectedWorkoutData";

export default function Exercises() {
  const setTimerPageData = useTimerPageData();
  const selectedWorkoutData = useRecoilValue(selectedWorkoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(219, 223, 219)",
      titleText: "Work",
      value: selectedWorkoutData.exercises,
      icon: <OfflineBoltOutlinedIcon />,
      option: workoutDataKeys.exercises,
      valueFormatter: (value) => `${value}`,
      min: 1,
      max: 30,
      step: 1,
      marks: [
        {
          value: 1,
          label: "1",
        },
        {
          value: 5,
          label: "5",
        },
        {
          value: 10,
          label: "10",
        },
        {
          value: 15,
          label: "15",
        },
        {
          value: 20,
          label: "20",
        },
        {
          value: 25,
          label: "25",
        },
        {
          value: 30,
          label: "30",
        },
      ],
    });
  };

  return (
    <Container backgroundColor="rgba(192,192,192, 0.3)" onClick={handleClick}>
      <IconWrapper>
        <OfflineBoltOutlinedIcon sx={{ color: "gray" }} />
      </IconWrapper>
      <Title>Exercises</Title>
      <Count fontColor="gray">{selectedWorkoutData.exercises}</Count>
    </Container>
  );
}
