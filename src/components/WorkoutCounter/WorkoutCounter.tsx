import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedWorkoutIndexState } from "../../atoms/selectedWorkoutDataIndex";
import { workoutDataState } from "../../atoms/workoutData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 40px;
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
`;

const Text = styled.p``;

export default function WorkoutCounter() {
  const workoutData = useRecoilValue(workoutDataState);
  const selectedWorkoutIndex = useRecoilValue(selectedWorkoutIndexState);

  const selectedWorkout = workoutData[selectedWorkoutIndex];

  return (
    <Container>
      <CounterWrapper>
        <Text>Exercise</Text>
        <Text>2/{selectedWorkout.exercises}</Text>
      </CounterWrapper>
      <CounterWrapper>
        <Text>Round</Text>
        <Text>1/{selectedWorkout.rounds}</Text>
      </CounterWrapper>
    </Container>
  );
}
