import { atom } from "recoil";
import { TimerPageOption } from "../Types";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

export const TimerPageDataState = atom({
  key: "timerPageData",
  default: {
    backgroundColor: "rgb(111, 209, 111)",
    titleText: "Work",
    value: 20,
    icon: <PlayCircleOutlineRoundedIcon />,
  } as TimerPageOption,
});
