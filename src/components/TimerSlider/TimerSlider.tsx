import { Slider } from "@mui/material";
import styled from "styled-components";
import { TimerPageDataState } from "../../atoms/TimerPageOptions";
import { useRecoilState } from "recoil";

const Container = styled.div`
  flex: 1;
  margin-top: 50px;

  .MuiSlider-rail {
    background-color: white;
    opacity: 1;
    width: 10px;
  }

  .MuiSlider-track {
    background-color: #2aaa2a;
    border: none;
    width: 10px;
  }

  .MuiSlider-mark {
    display: none;
  }

  .MuiSlider-markLabel {
    color: white;
    font-size: 16px;
    font-weight: 500;
  }

  .MuiSlider-thumb {
    background: darkgray;
    box-shadow: none;

    :hover {
      box-shadow: none;
    }
  }
`;

interface Props {
  value: number;
}

export default function TimerSlider({ value }: Props) {
  const [timerPageData, setTimerPageData] = useRecoilState(TimerPageDataState);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setTimerPageData({ ...timerPageData, value: newValue as number });
  };

  return (
    <Container>
      <Slider
        orientation="vertical"
        marks={timerPageData.marks}
        step={timerPageData.step}
        min={timerPageData.min}
        max={timerPageData.max}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
