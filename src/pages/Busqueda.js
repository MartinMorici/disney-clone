import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../components/Movies';

function Busqueda() {
  const [query, setQuery] = useState('');
  const [resultado, setResultado] = useState([]);
  const movies = useSelector((store) => store.movie.movies);
  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    if (query.length > 0) {
      const filteredMovies = movies.filter((movie) =>
        movie.nombre.toLowerCase().includes(query)
      );
      setResultado(filteredMovies);
    }
  };

  return (
    <>
      <Form>
        <input
          spellCheck='false'
          autoFocus
          type='text'
          placeholder='Título de película o serie'
          onChange={handleChange}
          value={query}
        />
      </Form>

      <Wrapper>
        {(resultado.length > 0 && query.length > 0) ? (
          <Section>
            <div className='peliculas'>
              {resultado.map((movie) => {
                return (
                  <Link key={movie.id} to={`/details/${movie.id}`}>
                    <img
                      className='image'
                      draggable='false'
                      src={movie.thumbnail}
                      alt={movie.name}
                    />
                  </Link>
                );
              })}
            </div>
          </Section>
        ) : (
          <Mensaje>
            {query.length === 0 ? '' : 'No se encontró ninguna serie o película con ese nombre'}
          </Mensaje>
        )}
      </Wrapper>
    </>
  );
}

const Form = styled.form`
  input {
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0.11px;
    line-height: 1.2;
    height: 100px;
    position: fixed;
    left: 0px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    text-overflow: ellipsis;
    z-index: calc(9);
    border: none;
    background: rgb(75, 78, 90);
    color: rgb(168, 169, 173);
    padding-left: calc(3.5vw + 24px);
    ::placeholder {
      color: rgb(168, 169, 173);
    }
    width: 100%;
    &:focus {
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      background-color: rgb(98, 102, 118);
      border-bottom: none;
      color: white;
      ::placeholder {
        color: white;
      }
    }
    @media (max-width: 600px) {
      height: 50px;
      font-size: 20px;
      ::placeholder{
        font-size: 20px;
      }
    }
  }
`;

const Mensaje = styled.div`
font-size: 20px;
margin-top: 3rem;
`;

const Wrapper = styled.div`
  padding: 0 calc(3.5vw + 24px);
  margin-top: 8rem;
`;
export default Busqueda;
