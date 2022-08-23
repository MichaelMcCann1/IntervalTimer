import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataState } from "../../../atoms/workoutData";
import { workoutDataKeys } from "../../../constants/workoutData";
import { formatTime } from "../../../utils/formatTime";

export default function RoundReset() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(196, 209, 111)",
      titleText: "Round Reset",
      value: workoutData.reset,
      icon: <AccessTimeRoundedIcon />,
      option: workoutDataKeys.reset,
      min: 5,
      max: 180,
      step: 5,
      marks: [
        {
          value: 5,
          label: "5",
        },
        {
          value: 30,
          label: "30",
        },
        {
          value: 60,
          label: "60",
        },
        {
          value: 90,
          label: "90",
        },
        {
          value: 120,
          label: "120",
        },
        {
          value: 150,
          label: "150",
        },
        {
          value: 180,
          label: "180",
        },
      ],
    });
  };

  return (
    <Container backgroundColor="rgba(255, 255, 0, 0.15)" onClick={handleClick}>
      <IconWrapper>
        <AccessTimeRoundedIcon sx={{ color: "rgb(204,204,0)" }} />
      </IconWrapper>
      <Title>Round Reset</Title>
      <Count fontColor="rgb(204,204,0)">{formatTime(workoutData.reset)}</Count>
    </Container>
  );
}
