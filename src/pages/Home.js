import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../components/Carousel';
import Collections from '../components/Collections';
import Movies from '../components/Movies';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useDispatch} from 'react-redux';
import { setMovies, setIsLoading } from '../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchMovies = async () => {
      const movieArray = []
      const querydb = getFirestore();
      const queryDoc = await getDocs(collection(querydb, 'movies'));
      queryDoc.forEach((doc) => {
        const movie = {
          id: doc.id,
          ...doc.data()
        }
        movieArray.push(movie);
      });
      dispatch(setMovies(movieArray));
      dispatch(setIsLoading(false))
    };
    fetchMovies();
  }, []);

  return (
    <Main>
      <Slider />
      <Collections />
      <Movies />
    </Main>
  );
}

const Main = styled.main`
  padding: 0 calc(3.5vw + 24px);
`;

export default Home;
