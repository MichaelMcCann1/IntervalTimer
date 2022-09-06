import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { formatTime } from "../../../utils/formatTime";
import { workoutDataKeys } from "../../../constants/workoutData";
import { workoutDataState } from "../../../atoms/workoutData";
import { selectedWorkoutIndexState } from "../../../atoms/selectedWorkoutDataIndex";

export default function Rest() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);
  const selectedWorkoutIndex = useRecoilValue(selectedWorkoutIndexState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(223, 104, 104)",
      titleText: "Rest",
      value: workoutData[selectedWorkoutIndex].rest,
      icon: <PauseCircleOutlineRoundedIcon />,
      option: workoutDataKeys.rest,
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
    <Container backgroundColor="rgba(255, 0, 0, 0.2)" onClick={handleClick}>
      <IconWrapper>
        <PauseCircleOutlineRoundedIcon sx={{ color: "red" }} />
      </IconWrapper>
      <Title>Rest</Title>
      <Count fontColor="red">
        {formatTime(workoutData[selectedWorkoutIndex].rest)}
      </Count>
    </Container>
  );
}
