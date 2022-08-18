import React from "react";
import { Container, IconWrapper, Title, Count } from "./WorkoutOptionsElements";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";

export default function Exercises() {
  return (
    <Container backgroundColor="rgba(192,192,192, 0.3)">
      <IconWrapper>
        <OfflineBoltOutlinedIcon sx={{ color: "gray" }} />
      </IconWrapper>
      <Title>Exercises</Title>
      <Count fontColor="gray">10</Count>
    </Container>
  );
}
