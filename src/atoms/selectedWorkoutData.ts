import { atom } from "recoil";
import { defaultWorkoutData } from "../constants/workoutData";
import { workoutData } from "../Types";

export const selectedWorkoutDataState = atom({
  key: 'selectedWorkoutData',
  default: defaultWorkoutData as workoutData
})