import styled from "styled-components";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const logoSubRef = useRef(null);
  useEffect(() => {
    const logoSub = logoSubRef.current;

    gsap.fromTo(
      [logoSub],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <>
      <Navbar>
        <nav>
          <div className="logo">
            <svg
              className="svg-logo"
              viewBox="0 0 512 530"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M334.522 496.312L334.533 496.307L334.543 496.302C378.238 475.283 411.924 445.176 435.432 405.984C459.46 366.777 471.38 320.665 471.38 267.842C471.38 215.021 459.462 168.68 435.453 128.998C411.961 88.8325 378.283 58.2192 334.574 37.1869C291.394 15.6722 241.096 5 183.823 5H10H5V10V522V527H10H183.823C241.078 527 291.356 516.826 334.522 496.312ZM323.522 401.29C291.558 432.514 245.256 448.488 183.823 448.488H102.294V83.5122H183.823C245.217 83.5122 291.499 99.9546 323.469 132.131C355.491 164.361 371.789 209.372 371.789 267.842C371.789 325.815 355.497 370.054 323.522 401.29Z" />
            </svg>
            <span className="logoSub" ref={logoSubRef}>
              Photography
            </span>
          </div>
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </Navbar>
    </>
  );
};

export default Header;

const Navbar = styled.section`
  background-color: black;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    height: 70px;
    max-width: 1300px;
    width: 90vw;
    margin: 0 auto;
    .logo {
      display: flex;
      justify-content: center;
      align-items: end;
      span {
        color: #d3d3d3;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
      }
      .svg-logo {
        height: 40px;
        width: 40px;
        stroke: white;
        fill-opacity: 0;
        stroke-width: 10px;
        stroke-dasharray: 4500;
        animation: draw 8s ease;
      }
      @keyframes draw {
        0% {
          stroke-dashoffset: 4500;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
    }
  }

  ul {
    display: flex;
    gap: 20px;
    .nav-item {
      list-style: none;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.3s;
      }
      &:hover::after {
        width: 100%;
        transition: width 0.3s;
      }
      a {
        text-decoration: none;
        color: white;
        display: inline-block;
        letter-spacing: 2px;
        font-size: 1.15rem;
      }
    }
  }
`;
