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
  background-color: purple;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: white;
  margin: 15px 15px;
`;
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring' } },
};

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.5,
//       staggerChildren: 0.2,
//     },
//   },
// };

const CircleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

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
  const [isShowing, setIsShowing] = useState(true);

  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 360,
    },
    leaving: {
      opacity: 0,
      scale: 0,
      y: 20,
    },
  };

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsShowing((current) => !current);
  };

  return (
    <Wrapper>
      <button onClick={onClick}>click me</button>
      <AnimatePresence>
        {isShowing ? (
          <Box
            variants={boxVariants}
            initial="inital"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
