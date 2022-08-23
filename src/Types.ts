import { ReactElement } from "react";

export interface Marks {
  value: number,
  label: string
}

export interface TimerPageOption {
  backgroundColor: string,
  titleText: string,
  value: number,
  icon: ReactElement
  option: string,
  min: number,
  max: number,
  step: number,
  marks: Marks[],
  valueFormatter: (value: number) => string
}

export interface workoutData {
  work: number,
  rest: number,
  exercises: number,
  rounds: number,
  reset: number,
  name: string,
}