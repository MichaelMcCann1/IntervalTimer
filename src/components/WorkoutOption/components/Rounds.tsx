import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { useTimerPageData } from "../../../utils/hooks/useTimerPageData";
import { useRecoilValue } from "recoil";
import { workoutDataKeys } from "../../../constants/workoutData";
import { workoutDataState } from "../../../atoms/workoutData";
import { selectedWorkoutIndexState } from "../../../atoms/selectedWorkoutDataIndex";

export default function Rounds() {
  const setTimerPageData = useTimerPageData();
  const workoutData = useRecoilValue(workoutDataState);
  const selectedWorkoutIndex = useRecoilValue(selectedWorkoutIndexState);

  const handleClick = () => {
    setTimerPageData({
      backgroundColor: "rgb(142, 111, 209)",
      titleText: "Rounds",
      value: workoutData[selectedWorkoutIndex].rounds,
      icon: <RefreshRoundedIcon />,
      option: workoutDataKeys.rounds,
      valueFormatter: (value) => `${value}X`,
      min: 1,
      max: 5,
      step: 1,
      marks: [
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
        {
          value: 5,
          label: "5",
        },
      ],
    });
  };

  return (
    <Container backgroundColor="rgba(0, 0, 255, 0.1)" onClick={handleClick}>
      <IconWrapper>
        <RefreshRoundedIcon sx={{ color: "royalblue" }} />
      </IconWrapper>
      <Title>Rounds</Title>
      <Count fontColor="royalblue">
        {workoutData[selectedWorkoutIndex].rounds}X
      </Count>
    </Container>
  );
}
