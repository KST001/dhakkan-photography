// import Header from "./components/Header";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Welcome = () => {
  const logoNameRef = useRef(null);
  const logoSubRef = useRef(null);
  useEffect(() => {
    const logoName = logoNameRef.current;
    const logoSub = logoSubRef.current;
    gsap.fromTo(
      [logoName, logoSub],
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
      <Starting className="loading-page">
        <svg
          className="svg"
          viewBox="0 0 512 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M334.522 496.312L334.533 496.307L334.543 496.302C378.238 475.283 411.924 445.176 435.432 405.984C459.46 366.777 471.38 320.665 471.38 267.842C471.38 215.021 459.462 168.68 435.453 128.998C411.961 88.8325 378.283 58.2192 334.574 37.1869C291.394 15.6722 241.096 5 183.823 5H10H5V10V522V527H10H183.823C241.078 527 291.356 516.826 334.522 496.312ZM323.522 401.29C291.558 432.514 245.256 448.488 183.823 448.488H102.294V83.5122H183.823C245.217 83.5122 291.499 99.9546 323.469 132.131C355.491 164.361 371.789 209.372 371.789 267.842C371.789 325.815 355.497 370.054 323.522 401.29Z" />
        </svg>

        <div className="name-container">
          <div className="logo-name" ref={logoNameRef}>
            Dhakkan
          </div>
          <div className="logo-sub" ref={logoSubRef}>
            photography
          </div>
        </div>
      </Starting>
    </>
  );
};

export default Welcome;

const Starting = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* background: linear-gradient(to right, #2c5364, #203a43, #0f2027); */
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #191654;
  .svg {
    height: 150px;
    width: 150px;
    stroke: white;
    fill-opacity: 0;
    stroke-width: 5px;
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

  .name-container {
    overflow: hidden;
    .logo-name {
      color: #fff;
      font-size: 20px;
      letter-spacing: 12px;
      text-transform: uppercase;
      font-weight: bolder;
    }

    .logo-sub {
      font-size: 0.8rem;
      color: #fff;
      letter-spacing: 1.3rem;
      text-transform: uppercase;
    }
  }
`;
