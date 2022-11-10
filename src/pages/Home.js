import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Carousel'


function Home() {
  return (
    <Main>
      <Slider/>
    </Main>
  )
}

const Main = styled.main`
  min-height: calc(100vh - 72px);
  padding: 0 calc(3.5vw + 24px);
  
  &:before{
    background: url("./images/background.png") 50%/cover no-repeat fixed;
    content:"";
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default Home