import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { timerPageOpenState } from "../../../atoms/timerPageOpen";
import { TimerPageDataState } from "../../../atoms/TimerPageOptions";

export default function Work() {
  const setTimerPageOpen = useSetRecoilState(timerPageOpenState);
  const setTimerPageData = useSetRecoilState(TimerPageDataState);
  const timerPageData = useRecoilValue(TimerPageDataState);

  const handleClick = () => {
    setTimerPageOpen(true);
    setTimerPageData({
      backgroundColor: "rgb(111, 209, 111)",
      titleText: "Work",
      value: timerPageData.value,
      icon: <PlayCircleOutlineRoundedIcon />,
    });
  };

  return (
    <Container backgroundColor="rgba(0, 255, 0, 0.2)" onClick={handleClick}>
      <IconWrapper>
        <PlayCircleOutlineRoundedIcon sx={{ color: "green" }} />
      </IconWrapper>
      <Title>Work</Title>
      <Count fontColor="green">{timerPageData.value}</Count>
    </Container>
  );
}
