import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataState } from "../../../atoms/workoutData";
import { formatTime } from "../../../utils/formatTime";
import { workoutDataKeys } from "../../../constants/workoutData";

export default function Rest() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(223, 104, 104)",
      titleText: "Rest",
      value: workoutData.rest,
      icon: <PauseCircleOutlineRoundedIcon />,
      option: workoutDataKeys.rest,
    });
  };

  return (
    <Container backgroundColor="rgba(255, 0, 0, 0.2)" onClick={handleClick}>
      <IconWrapper>
        <PauseCircleOutlineRoundedIcon sx={{ color: "red" }} />
      </IconWrapper>
      <Title>Rest</Title>
      <Count fontColor="red">{formatTime(workoutData.rest)}</Count>
    </Container>
  );
}
