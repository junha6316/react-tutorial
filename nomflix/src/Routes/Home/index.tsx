import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Wrapper,
  Loader,
  Banner,
  OverLay,
  Title,
  OverView,
  Slider,
  Row,
  Box,
  Info,
  MovieModal,
  MovieModalCover,
  MovieModalOverView,
  MovieModalTitle,
} from './styled';
import { infoVariants, BoxVariants, rowVariants } from './variants';
import { getMovies, IGetMoviesResult, IMovie } from '../../api';
import { makeImagePath } from '../../utils';
import { useForm } from 'react-hook-form';

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies,
  );

  const [firstMovie, ...sliderMovies] = data?.results ?? [];

  const [idx, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>('/movies/:movieId');
  const { scrollY } = useViewportScroll();

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = 6;
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) =>
      prev === Math.floor(sliderMovies.length / offset) - 1 ? 0 : prev + 1,
    );
  };

  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history.goBack();
  };

  const clickedMovie = sliderMovies.find(
    (movie) => bigMovieMatch && movie.id === +bigMovieMatch.params.movieId,
  );

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
          </Banner>
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
                      onClick={() => onBoxClicked(movie.id)}
                      variants={BoxVariants}
                      initial="normal"
                      whileHover="hover"
                      key={movie.id}
                      layoutId={String(movie.id)}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <OverLay onClick={onOverlayClick} animate={{ opacity: 1 }} />
                <MovieModal
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieModalCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            'w500',
                          )})`,
                        }}
                      />
                      <MovieModalTitle>{clickedMovie.title}</MovieModalTitle>
                      <MovieModalOverView>
                        {clickedMovie.overview}
                      </MovieModalOverView>
                    </>
                  )}
                </MovieModal>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
