import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: ${(props) => props.backgroundColor};
  padding: 15px 20px;
  gap: 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

export const IconWrapper = styled.div`
  display: grid;
  place-content: center;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: black;
`;

interface CountProps {
  fontColor: string;
}
export const Count = styled.p<CountProps>`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.fontColor};
  margin-left: auto;
`;
