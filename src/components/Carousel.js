import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const featuredMovies = useSelector((store) => store.movie.featured);

  let settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ImgCarousel {...settings}>
      {featuredMovies.map((movie) => {
        return(
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <div>
            <img className='slide-img' src={movie.sliderImg} alt={movie.nombre} />
            <img className='slide-logo' src={movie.sliderLogo} alt={`${movie.nombre} Logo`} />
          </div>
        </Link>);
      })}
    </ImgCarousel>
  );
}
export default Carousel;

const ImgCarousel = styled(Slider)`
  margin-top: 1.3rem;
  cursor: pointer;

  .slick-dots {
    bottom: 10px;
    right: 27px;
    width: auto;
  }

  .slick-slide {
    content: '';
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-prev {
    z-index: 1;
  }
  .slick-prev:before {
    content: '';
  }
  .slick-prev {
    background-image: url(../images/swiper/chevron-left-solid.svg);
    background-repeat: no-repeat;
    background-position: right;
    width: 90px;
    background-size: 46%;
    height: 100%;
    opacity: 0.7;
    left: -74px;
  }

  .slick-next:before {
    content: '';
  }
  .slick-next {
    background-image: url(../images/swiper/chevron-right-solid.svg);
    background-repeat: no-repeat;
    background-position: left;
    width: 90px;
    background-size: 46%;
    height: 100%;
    opacity: 0.7;
    right: -74px;
  }
  div {
    position: relative;
    &:focus-visible {
      outline: none;
    }
  }

  .slide-logo {
    position: absolute;
    top: 18%;
    left: 5%;
    width: 30%;
    transform: translateX(30px);
    opacity: 0;
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 350ms;
    pointer-events: none;
  }

  .slide-logo:hover .slide-img {
    outline: 4px solid rgba(249, 249, 249, 0.8);
  }

  .slick-current div div .slide-logo {
    transform: translateX(0);
    opacity: 1;
    transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 350ms,
      opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 350ms;
  }

  .slick-slide > div:first-child {
    padding: 0rem 1rem;
  }

  .slide-img {
    opacity: 0.4;
    pointer-events: none;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: opacity 300ms, outline 200ms;
    outline: 4px solid rgba(249, 249, 249, 0);
    outline-offset: -4px;
    &:hover {
      outline: 4px solid rgba(249, 249, 249, 0.4);
      outline-offset: -4px;
    }
  }

  .slick-current .slide-img {
    pointer-events: unset;
    opacity: 1;
    transition: opacity 300ms, outline 200ms;
  }

  @media (max-width:600px){
    .slide-img{
      height: 200px;
      object-fit: cover;
    }
    .slide-logo{
      height: 100px;
      width: 100px;
      object-fit: contain;
    }
  }
`;
