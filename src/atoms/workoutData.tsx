import { atom } from "recoil";
import { workoutData } from "../Types";

export const workoutDataState = atom({
  key: "workoutData",
  default: {
    work: 20,
    rest: 10,
    exercises: 10,
    rounds: 1,
    reset: 20,
    name: "Workout Name",
  } as workoutData,
});
