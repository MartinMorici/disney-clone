import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { setUserName, setUserPhoto } from '../features/user/userSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setUserName(null));
      dispatch(setUserPhoto(null));
    });
  };

  useEffect(() => {
    const redirect = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserName(user.displayName));
        dispatch(setUserPhoto(user.photoURL));
        navigate('/');
      }
    });

    return redirect();
  }, []);

  return (
    <>
      <Header>
        {user.name ? (
          <>
            <Logo src='../images/logo.svg' alt='Disney Logo' />
            <Nav className='nav'>
              <ul className='lista'>
                <Link to={'/'}>
                  <li>
                    <img src='../images/home-icon.svg' alt='Icono Home' />
                    <span className='texto'>Inicio</span>
                  </li>
                </Link>
                <Link to={'/busqueda'}>
                  <li>
                    <img src='../images/search-icon.svg' alt='Icono Búsqueda' />
                    <span className='texto'>Búsqueda</span>
                  </li>
                </Link>
                <Link to={'/watchlist'}>
                  <li>
                    <img src='../images/watchlist-icon.svg' alt='Icono Home' />
                    <span className='texto'>Mi Lista</span>
                  </li>
                </Link>
                <Link to={'/peliculas'}>
                  <li>
                    <img src='../images/movies-icon.svg' alt='Icono Home' />
                    <span className='texto'>Películas</span>
                  </li>
                </Link>
                <Link to={'/series'}>
                  <li>
                    <img src='../images/series-icon.svg' alt='Icono Home' />
                    <span className='texto'>Series</span>
                  </li>
                </Link>
              </ul>
            </Nav>
            <Profile>
              <span onClick={googleSignOut}>Cerrar Sesión</span>
              <ProfileImg src={user.photo} alt='' />
            </Profile>
          </>
        ) : (
          <BotonInicio onClick={googleSignIn}>Iniciar Sesión</BotonInicio>
        )}
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 36px;
  @media screen and (max-width: 450px) {
    padding: 0;
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 1rem;
    height: auto;
    margin-bottom: 1rem;

    div{
      margin-left: 0;
    }
    .lista{
      margin: 0;
      justify-content: center;
    }
  }
`;

const Profile = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  min-width: 79px;
  height: 48px;
`;

const Nav = styled.nav`
  ul {
    margin-left: 2rem;
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;
      margin: 0 18px;
      cursor: pointer;
      &:hover span::after {
        transform: scaleX(1);
        opacity: 1;
      }
      span {
        position: relative;
        margin-left: 0.5rem;
        font-weight: 600;
        padding-bottom: 1px;
        &::after {
          position: absolute;
          content: '';
          height: 2px;
          width: 100%;
          background-color: white;
          bottom: -6px;
          left: 0;
          border-radius: 0px 0px 4px 4px;
          opacity: 0;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform-origin: left center;
        }
      }
      img {
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .lista {
      flex-wrap: wrap;
      row-gap: 0.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .lista {
      margin-left: 0rem;
    }
  }
  @media screen and (max-width: 1025px) {
    .texto {
      display: none;
    }
  }
`;
const BotonInicio = styled.div`
  margin-left: auto;
  padding: 0px 16px;
  height: 50px;
  max-width: 260px;
  /* max-width: none; */
  border: 1px solid silver;
  color: #f9f9f9;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: black;
    background-color: white;
    transition: all 0.2s ease 0s;
  }

  &:active {
    opacity: 0.7;
    transform: scale(0.97);
    transition: 0s;
  }
  @media screen and (max-width: 600px) {
    margin-top: 2rem;

  }
`;

const ProfileImg = styled.img`
  margin-left: auto;
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #48291c;
  margin-right: 1rem;
`;

export default Navbar;
