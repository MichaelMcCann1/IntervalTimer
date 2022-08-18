import React from "react";
import styled from "styled-components";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import TimerSlider from "../TimerSlider";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6fd16f;
  position: absolute;
  top: 0;
  left: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 100px 0;
  gap: 30px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Value = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  cursor: pointer;
`;

export default function TimerPage() {
  return (
    <Container>
      <IconWrapper>
        <KeyboardBackspaceRoundedIcon sx={{ fontSize: "30px" }} />
      </IconWrapper>
      <Header>
        <PlayCircleOutlineRoundedIcon />
        <Title>Work</Title>
      </Header>
      <Value>00:20</Value>
      <TimerSlider />
    </Container>
  );
}
