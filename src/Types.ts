import { ReactElement } from "react";

export interface TimerPageOption {
  backgroundColor: string,
  titleText: string,
  value: number,
  icon: ReactElement
}

export interface workoutData {
  work: number,
  rest: number,
  exercises: number,
  rounds: number,
  reset: number,
  name: string,
}