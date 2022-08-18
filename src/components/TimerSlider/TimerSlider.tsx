import React from "react";
import { Slider } from "@mui/material";
import styled from "styled-components";

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
const marks = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 120,
    label: "120",
  },
  {
    value: 150,
    label: "150",
  },
  {
    value: 180,
    label: "180",
  },
];

export default function TimerSlider() {
  return (
    <Container>
      <Slider orientation="vertical" marks={marks} step={5} min={5} max={180} />
    </Container>
  );
}
