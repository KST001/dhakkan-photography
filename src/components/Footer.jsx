import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <div className="container">
          <div className="Brand-logo">
            <svg
              className="svg"
              viewBox="0 0 512 530"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M334.522 496.312L334.533 496.307L334.543 496.302C378.238 475.283 411.924 445.176 435.432 405.984C459.46 366.777 471.38 320.665 471.38 267.842C471.38 215.021 459.462 168.68 435.453 128.998C411.961 88.8325 378.283 58.2192 334.574 37.1869C291.394 15.6722 241.096 5 183.823 5H10H5V10V522V527H10H183.823C241.078 527 291.356 516.826 334.522 496.312ZM323.522 401.29C291.558 432.514 245.256 448.488 183.823 448.488H102.294V83.5122H183.823C245.217 83.5122 291.499 99.9546 323.469 132.131C355.491 164.361 371.789 209.372 371.789 267.842C371.789 325.815 355.497 370.054 323.522 401.29Z" />
            </svg>

            <div className="name-container">
              <div className="logo-name">Dhakkan</div>
              <div className="logo-sub">photography</div>
            </div>
          </div>
          <nav>
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
          <div className="social-icon">
            <Link to="https://www.instagram.com/dhakkan.photography/">
              <RxInstagramLogo className="size" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100095145186130">
              <RiFacebookCircleFill className="size" />
            </Link>
          </div>
          <p>&copy; 2023 Dhakkan Photography, Inc. All Rights Reserved.</p>
          <p>Powered By TrinityTech.com</p>
        </div>
      </FooterSection>
    </>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background-color: #171717;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 340px;

  .container {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    /* border-top: 1px solid white; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Brand-logo {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      color: #191654;
      margin-bottom: 2rem;
      .svg {
        height: 64px;
        width: 64px;
        stroke: white;
        fill-opacity: 0;
        stroke-width: 8px;
        /* stroke-dasharray: 4500; */
        /* animation: draw 8s ease; */
      }
      .name-container {
        overflow: hidden;
        .logo-name {
          color: #fff;
          font-size: 1.25rem;
          letter-spacing: 12px;
          text-transform: uppercase;
          font-weight: bolder;
        }

        .logo-sub {
          font-size: 0.8rem;
          color: #fff;
          letter-spacing: 0.75rem;
          text-transform: uppercase;
        }
      }
    }

    ul {
      display: flex;
      gap: 6rem;
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
    .social-icon {
      display: flex;
      gap: 2rem;
      margin: 2rem 0;

      .size {
        font-size: 2.4rem;
        color: white;
        cursor: pointer;
      }
    }
    p {
      font-size: 0.8rem;
      line-height: 1.25rem;
      letter-spacing: 0.15rem;
      margin: 0.5rem;
    }
  }
`;
