import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Section } from '../components/Movies'


function Peliculas() {
    const movies = useSelector((store) => store.movie.movies)
    const filteredMovies = movies.filter((movie) => movie.tipo === 'serie')

  return (
    <Wrapper>
        <Section>
            <div className="peliculas">
                {filteredMovies.map((movie) => {
                    return (
                      <Link key={movie.id} to={`/details/${movie.id}`}>
                        <img draggable='false' src={movie.thumbnail} alt={movie.name} />
                      </Link>
                    );
                  })}
            </div>
        </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding:0 calc(3.5vw + 24px); 
margin-top: 2rem;
`



export default Peliculas