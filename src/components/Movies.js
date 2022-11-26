import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Movies() {
  const movies = useSelector((store) => store.movie.movies);
  const isLoading = useSelector((store) => store.movie.isLoading);
  return (
    <Section>
      <div>
        <h4>Recomendaciones para ti</h4>
        <div className='peliculas'>
          {movies.slice(0, 10).map((movie) => {
            return (
              <Link key={movie.id} to={`/details/${movie.id}`}>
                <img draggable='false' src={movie.thumbnail} alt={movie.name} />
              </Link>
            );
          })}
        </div>
        {isLoading && (
          <div className='center'>
            <span className='loader'></span>
          </div>
        )}
      </div>
    </Section>
  );
}

export const Section = styled.section`
  margin-bottom: 3rem;
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 0.11px;
    line-height: 1.4;
  }

  .peliculas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1.3rem;
    img {
      user-select: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      outline: 4px solid rgba(255, 255, 255, 0);
      outline-offset: -4px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;

      &:hover {
        outline: 4px solid rgba(255, 255, 255, 0.4);
        outline-offset: -4px;
        transform: scale(1.05);
      }
    }
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #77d1ee;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .center {
    display: grid;
    place-content: center;
    padding: 3rem;
  }

  @media screen and (max-width: 1100px){
    .peliculas{
      grid-template-columns: repeat(3,1fr);
    }
  }
  @media screen and (max-width: 768px){
    .peliculas{
      grid-template-columns: repeat(2,1fr);
    }
  }
  @media screen and (max-width: 600px){
    .peliculas{
      grid-template-columns: repeat(1,1fr);
    }
  }


`;

export default Movies;
