import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../components/Movies';
import { addRemoveToWatchlist } from '../features/movie/movieSlice';
function Watchlist() {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.movie.watchlist);

  const updateWatchlist = (event,movieId) => {
    dispatch(addRemoveToWatchlist(movieId))
  }

  return (
    <Wrapper>
      {watchlist.length > 0 ? (
        <Section>
          <div className='peliculas'>
            {watchlist.map((movie) => {
              return (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <img
                    className='image'
                    draggable='false'
                    src={movie.thumbnail}
                    alt={movie.name}
                  />
                  <Boton onClick={(e) => e.preventDefault()}>
                    <div className='icono' onClick={(e) => { updateWatchlist(e,movie.id)}} >
                      {watchlist.some((film) => film.id === movie.id) ? (
                        <span className='plus quitar'>-</span>
                      ) : (
                        <span className='plus'>+</span>
                      )}
                    </div>
                  </Boton>
                </Link>
              );
            })}
          </div>
        </Section>
      ) : (
        <Mensaje>Aún no tienes ningun elemento agregado! Comienza a agregar series y películas.</Mensaje>
      )}
    </Wrapper>
  );
}

const Boton = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: -0.5rem;

  .icono {
    cursor: pointer;
    width: 35px;
    height: 35px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in-out;
    .plus {
      font-size: 30px;
      color: white;
      margin-top: 0;
      font-family: auto;
      font-weight: 800;
    }
    .quitar{
      position: relative;
      top: -3px;
    }

    &:hover {
      background-color: #a7aba8;
    }
    &:hover .image {
        outline: 4px solid rgba(255, 255, 255, 0.4);
        outline-offset: -4px;
        transform: scale(1.05);
      }
  }
`;
const Wrapper = styled.div`
  padding: 0 calc(3.5vw + 24px);
  margin-top: 2rem;
  a {
    position: relative;
  }
`;
const Mensaje = styled.div`
  padding: 5rem;
  display: grid;
  place-content: center;
  font-size: 20px;
`;

export default Watchlist;
