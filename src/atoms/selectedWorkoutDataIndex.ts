import {atom} from 'recoil'

export const selectedWorkoutIndexState = atom({
  key: 'selectedWorkoutIndex',
  default: 0,
})