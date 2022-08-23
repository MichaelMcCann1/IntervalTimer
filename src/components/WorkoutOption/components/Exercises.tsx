import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataState } from "../../../atoms/workoutData";
import { workoutDataKeys } from "../../../constants/workoutData";

export default function Exercises() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(219, 223, 219)",
      titleText: "Work",
      value: workoutData.exercises,
      icon: <OfflineBoltOutlinedIcon />,
      option: workoutDataKeys.exercises,
    });
  };

  return (
    <Container backgroundColor="rgba(192,192,192, 0.3)" onClick={handleClick}>
      <IconWrapper>
        <OfflineBoltOutlinedIcon sx={{ color: "gray" }} />
      </IconWrapper>
      <Title>Exercises</Title>
      <Count fontColor="gray">{workoutData.exercises}</Count>
    </Container>
  );
}
