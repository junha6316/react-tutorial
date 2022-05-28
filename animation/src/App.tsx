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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 20;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 2px 2px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const toggleClicked = (event: React.MouseEvent) => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper>
      <Grid>
        {['1', '2', '3', '4'].map((i, idx) => (
          <Box onClick={() => setClickedId(i)} key={idx} layoutId={i} />
        ))}
      </Grid>
      <AnimatePresence>
        {clickedId ? (
          <OverLay
            onClick={() => setClickedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId={clickedId} style={{ width: 400, height: 200 }} />
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
