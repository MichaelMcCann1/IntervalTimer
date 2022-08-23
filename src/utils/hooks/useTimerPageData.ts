import { useSetRecoilState } from "recoil";
import { timerPageOpenState } from "../../atoms/timerPageOpen";
import { TimerPageDataState } from "../../atoms/TimerPageOptions";
import { TimerPageOption } from "../../Types";

export const useTimerPageData = () => {
  const setTimerPageOpen = useSetRecoilState(timerPageOpenState);
  const setTimerPageData = useSetRecoilState(TimerPageDataState);

  return (data: TimerPageOption) => {
    setTimerPageOpen(true);
    setTimerPageData(data);
  }
}