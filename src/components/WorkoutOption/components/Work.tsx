import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { timerPageOpenState } from "../../../atoms/timerPageOpen";
import { TimerPageDataState } from "../../../atoms/TimerPageOptions";
import { formatTime } from "../../../utils/formatTime";
import { workoutDataState } from "../../../atoms/workoutData";

export default function Work() {
  const setTimerPageOpen = useSetRecoilState(timerPageOpenState);
  const setTimerPageData = useSetRecoilState(TimerPageDataState);
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageOpen(true);
    setTimerPageData({
      backgroundColor: "rgb(111, 209, 111)",
      titleText: "Work",
      value: workoutData.work,
      icon: <PlayCircleOutlineRoundedIcon />,
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
