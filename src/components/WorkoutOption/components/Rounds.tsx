import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataState } from "../../../atoms/workoutData";
import { workoutDataKeys } from "../../../constants/workoutData";

export default function Rounds() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(142, 111, 209)",
      titleText: "Rounds",
      value: workoutData.rounds,
      icon: <RefreshRoundedIcon />,
      option: workoutDataKeys.rounds,
    });
  };

  return (
    <Container backgroundColor="rgba(0, 0, 255, 0.1)" onClick={handleClick}>
      <IconWrapper>
        <RefreshRoundedIcon sx={{ color: "royalblue" }} />
      </IconWrapper>
      <Title>Rounds</Title>
      <Count fontColor="royalblue">{workoutData.rounds}X</Count>
    </Container>
  );
}
