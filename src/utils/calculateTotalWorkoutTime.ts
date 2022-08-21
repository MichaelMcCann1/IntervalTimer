import { workoutData } from "../Types";

export const calculateTotalWorkoutTime = (workoutData: workoutData) => {
  const {work, rest, exercises, rounds, reset} = workoutData

  return ((work * exercises) + (rest * (exercises - 1)) * rounds) + ((rounds - 1) * reset)
}