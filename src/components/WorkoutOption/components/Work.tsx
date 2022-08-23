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
      valueFormatter: formatTime,
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
    <Container backgroundColor="rgba(0, 255, 0, 0.2)" onClick={handleClick}>
      <IconWrapper>
        <PlayCircleOutlineRoundedIcon sx={{ color: "green" }} />
      </IconWrapper>
      <Title>Work</Title>
      <Count fontColor="green">{formatTime(workoutData.work)}</Count>
    </Container>
  );
}
