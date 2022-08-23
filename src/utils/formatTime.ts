import { Duration } from "luxon"

export const formatTime = (value: number) => {
  const valueDuration = Duration.fromObject({seconds: value})
  return valueDuration.toFormat('m:ss')
}