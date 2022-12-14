import { atom } from "recoil";
import { defaultWorkoutData } from "../constants/workoutData";
import { workoutData } from "../Types";

export const workoutDataState = atom({
  key: "workoutData",
  default: [defaultWorkoutData] as any,
});
