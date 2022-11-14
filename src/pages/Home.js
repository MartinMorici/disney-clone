import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Carousel'
import Collections from '../components/Collections'
import Movies from '../components/Movies'

function Home() {
  return (
    <Main>
      <Slider/>
      <Collections/>
      <Movies/>
    </Main>
  )
}

const Main = styled.main`
  min-height: calc(100vh - 72px);
  padding: 0 calc(3.5vw + 24px);
  
`

export default Home