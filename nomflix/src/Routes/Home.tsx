import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getMovies, IGetMoviesResult } from '../api';
import { makeImagePath } from '../utils';

const Wrapper = styled.div`
  background-color: black;
  height: 200vh;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 36px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  color: white;
  background-size: cover;
  background-position: center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
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

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const BoxVariants = {
  normal: {
    scale: 1,
    transition: {
      type: 'tween',
    },
  },
  hover: {
    scale: 1.3,

    y: -80,
    transition: {
      type: 'tween',
      duration: 0.1,
      delay: 0.3,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.1,
      delay: 0.3,
    },
  },
};

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies,
  );

  const [firstMovie, ...sliderMovies] = data?.results ?? [];

  const [idx, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = 6;
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) =>
      prev === Math.floor(sliderMovies.length / offset) - 1 ? 0 : prev + 1,
    );
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(firstMovie.backdrop_path || '')}
          >
            <Title>{firstMovie.title}</Title>
            <OverView>{firstMovie.overview}</OverView>
            <Slider>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row
                  variants={rowVariants}
                  key={idx}
                  transition={{ type: 'tween', duration: 1 }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {sliderMovies
                    .slice(offset * idx, offset * (idx + 1))
                    .map((movie, index) => (
                      <Box
                        variants={BoxVariants}
                        initial="normal"
                        whileHover="hover"
                        key={movie.id}
                        bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                      >
                        {movie.title}
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    ))}
                </Row>
              </AnimatePresence>
            </Slider>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
