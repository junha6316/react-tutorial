import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  background-color: black;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
export const OverView = styled.p`
  font-size: 36px;
  width: 50%;
`;

export const Slider = styled.div`
  position: relative;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;
export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  color: white;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px;
  background-color ${(props) => props.theme.black.lighter};
  opacity:0;
  position: absolute;
  width: 100%;
  bottom:0;
  h4{
    text-align: center;
    font-size: 18px;
  }
`;

export const OverLay = styled(motion.div)`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MovieModal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;

  background-color: ${(props) => props.theme.black.lighter};
`;

export const MovieModalTitle = styled.h2`
  color: ${(props) => props.theme.white.lighter};
  padding: 10px;
  position: relative;
  margin: 10px 0;
  margin-left: 5px;
  font-size: 32px;
  text-align: center;
  top: -60px;
`;

export const MovieModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

export const MovieModalOverView = styled.p`
  top: 40px;
  color: ${(props) => props.theme.white.lighter};
`;
