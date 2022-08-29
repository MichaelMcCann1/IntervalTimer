import {atom} from 'recoil'

export const selectedWorkoutIndexState = atom({
  key: 'selectedWorkoutIndex',
  default: null as number | null
})