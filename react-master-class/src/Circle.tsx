import styled from 'styled-components';
import { useState } from 'react';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text }: CircleProps) {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
export default Circle;
