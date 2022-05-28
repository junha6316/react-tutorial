import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  top: 100px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="test" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="test" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
