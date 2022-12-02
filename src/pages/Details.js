import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveToWatchlist } from '../features/movie/movieSlice';

function Details() {
  const dispatch = useDispatch();
  let movies = useSelector((store) => store.movie.movies);
  let watchlist = useSelector((store) => store.movie.watchlist);
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);
  const { background } = movie;

  const watchlistHandler = () => {
    dispatch(addRemoveToWatchlist(movieId));
  };

  return (
    <Main background={background}>
      <div className='background'>
        <div className='filter'></div>
      </div>

      <img className='logo' src={movie.logo} alt={movie.nombre} />
      <span>
        {movie.año} • {movie.duracion}
      </span>
      <span>{movie.genero}</span>
      <div className='botones'>
        <button className='boton play '>
          <img src='../images/play-button.svg' alt='Icono Play' />
          VER AHORA
        </button>
        <button className='boton trailer'>TRÁILER</button>
        <div className='icono' onClick={watchlistHandler}>
          {watchlist.some((film) => film.id === movie.id) ? (
            <span className='plus quitar'>-</span>
          ) : (
            <span className='plus'>+</span>
          )}
        </div>
        <img
          className='icono groupwatch'
          src='../images/group-icon.png'
          alt='GroupWatch Icono'
        />
      </div>
      <p>{movie.sinopsis}</p>
    </Main>
  );
}

const Main = styled.main`
  padding: 0 calc(3.5vw + 24px);

  .background {
    content: '';
    position: fixed;
    background: ${(props) => `url(${props.background}) 50% / cover no-repeat`};

    background-position: unset;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
  }
  @media screen and (max-width: 768px) {
    .background {
      background-size: 100vw;
    }
    .filter {
      background-image: radial-gradient(
        farthest-side at 73% 21%,
        transparent,
        rgb(26, 29, 41)
      );
      position: absolute;
      inset: 0px;
      z-index: -1;
    }
  }
  .logo {
    margin-top: 3.5rem;
    max-width: 341px;
    min-width: 100px;
    width: 35vw;
  }
  .icono {
    cursor: pointer;
    height: 44px;
    width: 44px;
    display: flex;
    user-select: none;
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
  }

  .groupwatch {
    padding: 2px;
  }

  .botones {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .boton {
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 1.6;
    transition: all 0.2s ease-in-out;
    height: 56px;
    border-radius: 0.25rem;
    padding: 0 24px;
  }

  .play {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: none;
    color: #0e0b14;
    margin: 0.25rem 0.75rem;
    margin-left: 0;
    &:hover {
      opacity: 0.6;
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.7rem;
    }
  }

  .trailer {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #f9f9f9;
    color: #f9f9f9;
    margin: 0.25rem 0rem;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  span {
    font-size: 13px;
    letter-spacing: -0.1px;
    display: block;
    line-height: 1.5;
    margin-top: 0.4rem;
  }

  p {
    font-size: 20px;
    color: #f9f9f9;
    padding-top: 1rem;
    line-height: 1.6;
    letter-spacing: -0.1px;
    max-width: 820px;
  }
`;

export default Details;
