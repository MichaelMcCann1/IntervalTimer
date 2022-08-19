import React from "react";
import styled from "styled-components";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import TimerSlider from "../TimerSlider";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useRecoilState } from "recoil";
import { timerPageOpenState } from "../../atoms/timerPageOpen";
import { TimerPageDataState } from "../../atoms/TimerPageOptions";
import { TimerPageOption } from "../../Types";

interface ContainerProps {
  open: boolean;
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.backgroundColor};
  position: absolute;
  top: 0;
  left: ${(props) => (props.open ? "0%" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 100px 0;
  gap: 30px;
  transition: left 0.4s ease;
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
  const [timerPageOpen, setTimerPageOpen] = useRecoilState(timerPageOpenState);
  const [timerPageData, setTimerPageData] = useRecoilState(TimerPageDataState);

  const { titleText, value, backgroundColor, icon } =
    timerPageData as TimerPageOption;

  const handleClick = () => {
    setTimerPageOpen(false);
  };

  return (
    <Container
      open={timerPageOpen}
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      <IconWrapper>
        <KeyboardBackspaceRoundedIcon sx={{ fontSize: "30px" }} />
      </IconWrapper>
      <Header>
        {icon}
        <Title>{titleText}</Title>
      </Header>
      <Value>{value}</Value>
      <TimerSlider value={value} />
    </Container>
  );
}
