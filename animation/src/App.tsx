import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg,#e09,#d0e)',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ],
  );

  const svg = {
    start: { pathLength: 0, fill: 'rgba(255,255,255,0)' },
    end: {
      fill: 'rgba(255,255,255,1)',
      pathLength: 1,
    },
  };
  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(x.get() + 30)}>click me</button>

      <Svg>
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 3 },
          }}
          d="M86.642 0L122 94.469H0l3.914-11.741L35.494 0h14.44l10.391 28.88L72.201 0h14.44zM49.934 83.942h20.783L66.803 74.9l-6.478-17.139-10.391 26.181zM43.32 9.312l-28.88 74.63h24.966l1.215-1.214 14.44-39.407-3.914-10.527-7.827-23.482zm62.89 74.63l-2.7-9.042-7.827-19.838-7.828-22.268L78.68 9.312 65.59 43.32l15.654 40.621h24.967z"
        ></motion.path>
      </Svg>
      <Box style={{ x, rotate }} drag dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
