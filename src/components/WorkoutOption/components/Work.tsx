import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useRecoilValue } from "recoil";
import { formatTime } from "../../../utils/formatTime";
import { workoutDataState } from "../../../atoms/workoutData";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { workoutDataKeys } from "../../../constants/workoutData";

export default function Work() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(111, 209, 111)",
      titleText: "Work",
      value: workoutData.work,
      icon: <PlayCircleOutlineRoundedIcon />,
      option: workoutDataKeys.work,
    });
  };

  return (
    <Container backgroundColor="rgba(0, 255, 0, 0.2)" onClick={handleClick}>
      <IconWrapper>
        <PlayCircleOutlineRoundedIcon sx={{ color: "green" }} />
      </IconWrapper>
      <Title>Work</Title>
      <Count fontColor="green">{formatTime(workoutData.work)}</Count>
    </Container>
  );
}
