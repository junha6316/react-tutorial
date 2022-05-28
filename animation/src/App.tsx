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
  width: 300px;
  height: 200px;
  display; flex;
  position: absolute;
  justify-content: center;
  align-items: center; 
  top: 100px;
  background-color: white;
  border-radius: 10px;
  font-size:28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  background-color: white;
  padding: 50px 50px 50px 50px;
`;
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: '100px', scale: 1 },
  drag: {
    backgroundColor: 'rgb(46, 204, 113',
    transition: { duration: '10s' },
  },
};

const Svg = styled.svg`
  width: 300px;
  heigh: 300px;
`;

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  const sliderVariants = {
    entry: (back: boolean) => {
      return {
        x: back ? -500 : 500,
        opacity: 0,
        scale: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: '0.3',
      },
    },
    end: (back: boolean) => {
      return {
        x: back ? 500 : -500,
        opacity: 0,
        scale: 0,
        rotateX: 180,
        transition: {
          duration: '0.3',
        },
      };
    },
  };
  // exitBeforeEnter 하나의 애니메이션 종료후 동작
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box
          custom={back}
          variants={sliderVariants}
          initial="entry"
          animate="center"
          exit="end"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>Prev</button>
      <button onClick={nextPlease}>Next</button>
    </Wrapper>
  );
}

export default App;
